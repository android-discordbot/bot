module.exports = {
    name: 'autoplay',
    aliases: ['auto', 'ap'],
    description: 'Turn autoplay on or off',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        const queue = client.distube.getQueue(message);
        if (!queue) return message.channel.send(`${client.emotes.error} queue kosong`);
        
        let mode = client.distube.toggleAutoplay(message);
        message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
    },
};