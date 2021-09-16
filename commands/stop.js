module.exports = {
    name: 'stop',
    description: 'stop the music and leave the channel',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');
        let queue = await client.distube.getQueue(message);

        if (queue) {
            client.distube.stop(message);

            message.channel.send(`bye i'm out`);
        } else if (!queue) {
            return;
        }
 
    }
}