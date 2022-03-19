module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    description: 'show what music is being played',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('masuk vc dulu tot');
        
        const server_queue = client.distube.getQueue(message);
        if (!server_queue) return message.channel.send('No Music Is Being Played.');

        const song = server_queue.songs[0];
        if(!song) return message.channel.send('No Music Is Being Played.');

        const duration = song.formattedDuration.split(':').reverse().reduce((prev, curr, i) => prev + curr * Math.pow(60, i), 0);

        const actualSeek = Math.floor((server_queue.connection.dispatcher.streamTime - server_queue.connection.dispatcher.pausedTime) / 1000) + 1;

        const seek = new Date(actualSeek * 1000).toISOString().substr(11, 8);

        const timeLeft = new Date((duration - actualSeek) * 1000).toISOString().substr(11, 8);
        
        let finalTotal = song.formattedDuration;

        const npEmbed = new Discord.MessageEmbed()
            .setColor('#7FFF00')
            .setAuthor('🎵 Now Playing 🎵')
            .setTitle(song.name)
            .setURL(song.url)
            .setThumbnail(song.thumbnail)
            .setDescription(`${seek} / ${finalTotal}`)
            .addField('Time Left:', timeLeft)
            .setTimestamp()
            .setFooter(`Requested by: ${message.author.username}`)
        message.channel.send(npEmbed);
    },
};