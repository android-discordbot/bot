module.exports = {
    name: 'queue',
    description: 'queue system',
    async execute(message, args, client) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');

        let queue = client.distube.getQueue(message);
        
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id+1}**. \`${song.name}\` - \`${song.formattedDuration}\``
        ).join("\n"));

        if (!queue) {
            return message.channel.send('no songs are currently in the queue');
        }
 
    }
}