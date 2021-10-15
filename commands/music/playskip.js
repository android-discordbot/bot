module.exports = {
    name: 'playskip',
    aliases: ['ps'],
    description: 'play the song on top of the queue',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const song = args.join(' ');
        client.distube.playSkip(message, song);
    }
}