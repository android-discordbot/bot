module.exports = {
    name: 'pause',
    description: 'pause playing music',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');

        client.distube.pause(message);
        message.channel.send("music is being paused");
    },
};