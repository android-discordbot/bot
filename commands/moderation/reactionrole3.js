module.exports = {
    name: 'reactionrole3',
    description: "sets up a third reaction role message",
    async execute(client, message, args, cmd, Discord) {
        const channel = '819186675576995850';
        const ValorantRole = message.guild.roles.cache.get("821030068884996136");
        const ROBLOXRole = message.guild.roles.cache.get("821030082993717328");
        const CSGORole = message.guild.roles.cache.get("821346916242554880");
        const L4D2Role = message.guild.roles.cache.get("923885035445157931");

        const ValorantRoleEmoji = '🎲';
        const ROBLOXRoleEmoji = '🎮';
        const CSGORoleEmoji = '🕹️';
        const L4D2RoleEmoji = '🧟';
        
        message.delete(message.author);

        let embed = new Discord.MessageEmbed()
            .setColor('#FFFF00')
            .setTitle('GAME')
            .setDescription('mabar game?\n\n'
            + `${ValorantRoleEmoji} for Valorant\n`
            + `${ROBLOXRoleEmoji} for ROBLOX\n`
            + `${CSGORoleEmoji} for CSGO\n`
            + `${L4D2RoleEmoji} for L4D2\n`);
        
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(ValorantRoleEmoji);
        messageEmbed.react(ROBLOXRoleEmoji);
        messageEmbed.react(CSGORoleEmoji);
        messageEmbed.react(L4D2RoleEmoji);

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
                if (reaction.emoji.name === L4D2RoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(L4D2Role);
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
                if (reaction.emoji.name === L4D2RoleEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(L4D2Role);
                }
            } else {
                return;
            };
        });
    },
};