module.exports = {
    name: 'invite',
    description: "send an invite link",
    execute(message, args, Discord) {
        message.channel.send('https://discord.com/oauth2/authorize?client_id=811562521957498910&scope=bot&permissions=0');
        
        // const invite = new Discord.MessageEmbed()
        // .setTitle('AndroidBot | Bot Bisa Apa Aja')
        // .setDescription('ini bot bisa ngapain aja terserah lu dah')
        // .setAuthor('udin')
        // .setColor('#7FFFD4')

        // message.channel.send(invite);
    }
}