module.exports = {
    name: 'invite',
    description: "send an invite link",
    execute(client, message, args, cmd, Discord) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=811562521957498910&scope=bot&permissions=0');
    },
};