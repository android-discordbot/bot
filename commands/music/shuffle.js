module.exports = {
    name: 'shuffle',
    aliases: ['sf'],
    description: 'shuffle the queue',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        client.distube.shuffle(message);
        message.channel.send('👍 shuffled');
    },
};