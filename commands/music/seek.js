module.exports = {
    name: 'seek',
    aliases: ['jump'],
    description: 'fastforward the song',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');

        const time = args.join(' ');
        if (!time) return message.channel.send('Put time to fast forward. Example: **#seek 10**')
        
        const number = Number(args[0]);
        if (number < 0) return message.channel.send('The number must be bigger or equal to 0');

        client.distube.seek(message, number);
    },
};