module.exports = {
    name: 'skip',
    description: 'skip now playing music',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');
        let queue = await client.distube.getQueue(message);

        if (queue) {
            client.distube.skip(message);

            message.channel.send(`Skipping..`);
        } else if (!queue) {
            return;
        }
 
    }
}