const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: "send an invite link",
    execute(message, Discord) {
        const invite = new Discord.MessageEmbed()
        .setTitle('AndroidBot | Bot Bisa Apa Aja')
        .setDescription('ini bot bisa ngapain aja terserah lu dah')
        .setAuthor('udin', 'https://cdn.discordapp.com/avatars/811562521957498910/8adb00b9e66c0e27e852890b88533bbb.webp?size=1024')
        .setURL('https://discord.com/oauth2/authorize?client_id=811562521957498910&scope=bot&permissions=0')
        .setColor('#7FFFD4')

        message.channel.send(invite);
    }
}