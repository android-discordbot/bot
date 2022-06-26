module.exports = {
    name: 'autoplay',
    aliases: ['auto', 'ap'],
    description: 'Turn autoplay on or off',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');

        const queue = client.distube.getQueue(message);
        if (!queue) return message.channel.send(`${client.emotes.error} queue empty`);
        
        let mode = client.distube.toggleAutoplay(message);
        message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
    },
};