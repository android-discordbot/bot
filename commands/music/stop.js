module.exports = {
    name: 'stop',
    aliases: ['st', 'dc'],
    description: 'stop the music and leave the voice channel',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');
        let queue = await client.distube.getQueue(message);

        if (queue) {
            client.distube.stop(message);

            message.channel.send(`Bye I'm out biishh .. `);
        } else if (!queue) {
            return;
        };
    },
};