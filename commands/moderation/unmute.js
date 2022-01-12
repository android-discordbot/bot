module.exports = {
    name: 'unmute',
    aliases: ["um"],
    description: "This unmutes a member by removing it from the mute role",
    execute(client, message, args, cmd, Discord) {
        const target = message.guild.member(message.mentions.users.first());
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'The Broys');
            let mainRole2 = message.guild.roles.cache.find(role => role.name === 'Memeber');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');

            if (!mainRole2 && !mainRole) 
            return message.channel.send("The main role doesn't exist in my list \nYou can still unmute that person by using `#removemute` instead");
                        
            let memberTarget = message.guild.members.cache.get(target.id);

            if (!mainRole2) {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            } else if (!mainRole) {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole2);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
            }
        } else {
            message.channel.send("Can't find that member!");
        }

    }
}