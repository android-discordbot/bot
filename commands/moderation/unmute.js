module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(client, message, args, cmd, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'The Broys');
            let mainRole2 = message.guild.roles.cache.find(role => role.name === 'Memeber');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole || mainRole2);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        } else{
            message.channel.send('Cant find that member!');
        }
    }
}