const Discord = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    description: 'dynamic queue system',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');
        
        let server_queue = client.distube.getQueue(message);

        if (!server_queue || !server_queue.songs.length) return message.channel.send('Queue is empty! 📪');

        try {
            let currentPage = 0;
            const embeds = generateQueueEmbed(message, server_queue.songs, server_queue.formattedDuration);
            const queueEmbed = await message.channel.send(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
            await queueEmbed.react("⬅️");
            await queueEmbed.react("❌");
            await queueEmbed.react("➡️");

            const filter = (reaction, user) => ["⬅️", "❌", "➡️"].includes(reaction.emoji.name) && message.author.id === user.id;
            const collector = queueEmbed.createReactionCollector(filter);

            collector.on("collect", async (reaction, user) => {
                try {
                    if (reaction.emoji.name === "➡️") {
                        if (currentPage < embeds.length - 1) {
                            currentPage++;
                            queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                        }
                    } else if (reaction.emoji.name === "⬅️") {
                        if (currentPage !== 0) {
                            --currentPage;
                            queueEmbed.edit(`**Current Page - ${currentPage + 1}/${embeds.length}**`, embeds[currentPage]);
                        }
                    } else {
                        collector.stop();
                        reaction.message.reactions.removeAll();
                        
                    };
                    await reaction.users.remove(message.author.id);
                } catch (error) {
                    console.error(error);
                    return message.channel.send("Error 😠");
                };
            });
        } catch (error) {
            console.error(error);
            return message.channel.send("Error Again 😡");
        };
    },
};

// queue function
function generateQueueEmbed(message, queue, duration) {
    const embeds = [];
    let k = 10;
    for (let i = 0; i < queue.length; i += 10) {
        const current = queue.slice(i, k);
        let j = i;
        k += 10;
        const info = current.map((track) => `**${++j}**. [${track.name}](${track.url}) - \`${track.formattedDuration}\``).join("\n\n");

        const embed = new Discord.MessageEmbed()
            .setAuthor(`${message.guild.name} | Song Queue`, message.guild.iconURL())
            .setColor("#7FFF00")
            .setDescription(info)
            .setTimestamp()
            .setFooter(`Queue Duration: ${duration}`)
        embeds.push(embed);
    };
    return embeds;
};