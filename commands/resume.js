module.exports = {
    name: 'resume',
    description: 'resume paused music',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.resume(message);
        message.channel.send("continuing the stream (●'◡'●)");
    }
}