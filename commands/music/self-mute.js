module.exports = {
    name: 'selfmute',
    aliases: ['sm'],
    description: 'self mute bot',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');

        client.distube.voices.get(message).setSelfMute(true);

        message.channel.send('Ok I muted myself 🤐');
    },
};