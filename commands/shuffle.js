module.exports = {
    name: 'shuffle',
    description: 'shuffle the queue',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.shuffle(message);
        message.channel.send('👍 shuffled');
    }
}