module.exports = {
    name: 'playskip',
    description: 'play the song on top of the queue',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const song = args.join(' ');
        client.distube.playSkip(message, song);
    }
}