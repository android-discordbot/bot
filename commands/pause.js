module.exports = {
    name: 'pause',
    description: 'pause the music',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.pause(message);
        message.channel.send("music is being paused");
    }

}