module.exports = {
    name: 'seek',
    description: 'fastforward the song',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const time = Number(args[0]);
        client.distube.seek(message, time);
    }
}