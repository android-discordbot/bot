module.exports = {
    name: 'selfdeaf',
    aliases: ['sd'],
    description: 'deafen the bot',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');

        client.distube.voices.get(message).setSelfDeaf(true);

        message.channel.send(`Ok I deafened myself 😵`);
    },
};