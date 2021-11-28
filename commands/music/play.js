module.exports = {
    name: 'play',
    aliases: ['p'],
    description: 'Play a song and queue system',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const music = args.join(' ');

        if (!music) return message.channel.send('bisa kasih nama lagunya atau bisa juga kasih link');

        client.distube.play(message, music);
    },
};