const { Role } = require("discord.js");

module.exports = {
    name: 'reactionrole3',
    description: "Sets up a third reaction role message!",
    async execute(client, message, args, cmd, Discord) {
        const channel = '819186675576995850';
        const ValorantRole = message.guild.roles.cache.find(role => role.name === "Valorant");
        const ROBLOXRole = message.guild.roles.cache.find(role => role.name === "ROBLOX");
        const CSGORole = message.guild.roles.cache.find(role => role.name === "CSGO");

        const ValorantRoleEmoji = '🎲';
        const ROBLOXRoleEmoji = '🎮';
        const CSGORoleEmoji = '🕹️';

        message.delete(message.author);

        let embed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('GAME')
            .setDescription('mabar game?\n\n'
            + `${ValorantRoleEmoji} for Valorant\n`
            + `${ROBLOXRoleEmoji} for ROBLOX\n`
            + `${CSGORoleEmoji} for CSGO`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(ValorantRoleEmoji);
        messageEmbed.react(ROBLOXRoleEmoji);
        messageEmbed.react(CSGORoleEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === ValorantRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ValorantRole);
                }
                if (reaction.emoji.name === ROBLOXRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ROBLOXRole);
                }
                if (reaction.emoji.name === CSGORoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(CSGORole);
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
                if (reaction.emoji.name === ValorantRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ValorantRole);
                }
                if (reaction.emoji.name === ROBLOXRoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ROBLOXRole);
                }
                if (reaction.emoji.name === CSGORoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CSGORole);
                }
            } else {
                return;
            };
        });

    },
};