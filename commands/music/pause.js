module.exports = {
    name: 'pause',
    description: 'pause the music',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.pause(message);
        message.channel.send("music is being paused");
    }
}