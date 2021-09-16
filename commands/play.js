module.exports = {
    name: 'play',
    description: 'Play a song and queue system',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const music = args.join(' ');

        client.distube.play(message, music);
    }

}