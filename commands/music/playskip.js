module.exports = {
    name: 'playskip',
    aliases: ['ps'],
    description: 'play the song on top of the queue',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');

        const music = args.join(' ');

        if (!music) return message.channel.send('put the name of the song or you can put a link too');

        client.distube.play(message.member.voice?.channel, music, {
            member: message.member,
            textChannel: message.channel,
            skip: true,
            message,
        });
    },
};