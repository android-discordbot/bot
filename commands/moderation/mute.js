const ms = require('ms');

module.exports = {
    name: 'mute',
    aliases: ["m"],
    description: "mutes a member by adding to a 'Mute' role",
    execute(client, message, args, cmd, Discord) {
        const target = message.guild.member(message.mentions.users.first());
        
        if (target) {
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            
            if (!muteRole) return message.channel.send("You do not have a Mute role, so the command won't work");

            let memberTarget = message.guild.members.cache.get(target.id);

            let allRoles = [];
            let cachedRoles = target.roles.cache;
            
            // *mute forever
            if (!args[1]) {
                target.roles.set(allRoles).then(member => member.roles.add(muteRole)).catch(console.error);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                
                return;
            }
            
            target.roles.set(allRoles).then(member => member.roles.add(muteRole)).catch(console.error);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            
            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                target.roles.set(cachedRoles);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted now`);
            }, ms(args[1]));
            
        } else {
            message.channel.send("Can't find that member!");
        }
    }
}