module.exports = {
    name: 'reactionrole2',
    description: "sets up a second reaction role message",
    async execute(client, message, args, cmd, Discord) {
        const channel = '819186675576995850';
        const KONTOLRole = message.guild.roles.cache.get("821029714709708800");
        const MEMEKRole = message.guild.roles.cache.get("821029928622751765");

        const KONTOLRoleEmoji = '🍆';
        const MEMEKRoleEmoji = '🍑';

        message.delete(message.author);

        let embed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('GENDER')
            .setDescription('Punya KONTOL apa MEMEK?\n\n'
            + `${KONTOLRoleEmoji} for KONTOL\n`
            + `${MEMEKRoleEmoji} for MEMEK`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(KONTOLRoleEmoji);
        messageEmbed.react(MEMEKRoleEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === KONTOLRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(KONTOLRole);
                }
                if (reaction.emoji.name === MEMEKRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(MEMEKRole);
                }
            } else {
                return;
            };
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === KONTOLRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(KONTOLRole);
                }
                if (reaction.emoji.name === MEMEKRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(MEMEKRole);
                }
            } else {
                return;
            };
        });

    },
};