module.exports = {
    name: 'kick',
    description: "kicks a member from the server",
    execute(client, message, args, cmd, Discord) {
        const target = message.mentions.users.first();
        if (target) {
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        } else {
            message.channel.send(`You couldn't kick that member!`);
        };
    },
};