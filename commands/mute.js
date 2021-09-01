const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "This mutes a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'The Broys');
            let mainRole2 = message.guild.roles.cache.find(role => role.name === 'Memeber');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
            
            if (!args[1]) {
                memberTarget.roles.remove(mainRole || mainRole2);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
                return
            }
            memberTarget.roles.remove(mainRole || mainRole2);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
            
            setTimeout(function() {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole || mainRole2);
            }, ms(args[1]));

        } else {
            message.channel.send('Cant find that member!');
        }
    }
}