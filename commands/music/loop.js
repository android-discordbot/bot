module.exports = {
    name: 'loop',
    aliases: ['repeat'],
    description: 'repeating the song',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.setRepeatMode(message, parseInt(args[0]));
        return message.channel.send("Looping ..");
    }
}