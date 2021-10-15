module.exports = {
    name: 'seek',
    aliases: ['jump'],
    description: 'fastforward the song',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const time = Number(args[0]);
        client.distube.seek(message, time);
    }
}