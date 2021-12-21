const mute = require("./mute");

module.exports = {
    name: 'removemute',
    aliases: [],
    description: "This unmutes a member if main role doesn't exist in the code",
    execute(client, message, args, cmd, Discord) {
        const target = message.guild.member(message.mentions.users.first());
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(muteRole.id);
            target.roles.set(mute.cacheRoles);
            message.channel.send(`<@${memberTarget.user.id}> has been removed from the mute role`);
        } else {
            message.channel.send("Can't find that member!");
        };
    },
};