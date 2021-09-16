module.exports = {
    name: 'loop',
    description: 'repeating the song',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.setRepeatMode(message, parseInt(args[0]));
        return message.channel.send('looping..');
 
    }
}