module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    description: 'show what music is being played',
    async execute(client, message, args, cmd, Discord) {
        if (!message.member.voice.channel) return message.channel.send('you need to be in a voice channel first 🤪');
        
        const server_queue = client.distube.getQueue(message);
        if (!server_queue) return message.channel.send('No Music Is Being Played.');

        const song = server_queue.songs[0];
        if(!song) return message.channel.send('No Music Is Being Played.');
        
        try {
            // const duration = song.formattedDuration.split(':').reverse().reduce((prev, curr, i) => prev + curr * Math.pow(60, i), 0);

            // const seek = Math.floor((server_queue.connection.dispatcher.streamTime - server_queue.connection.dispatcher.pausedTime) / 1000) + 1;

            // const actualSeek = new Date(seek * 1000).toISOString().substr(11, 8);

            // const timeLeft = new Date((duration - actualSeek) * 1000).toISOString().substr(11, 8);
            
            const actualSeek = Math.floor(song.formattedCurrentTime / 1000);
            let finalTotal = song.formattedDuration;
    
            const npEmbed = new Discord.MessageEmbed()
                .setColor('#7FFF00')
                .setAuthor('🎵 Now Playing 🎵')
                .setTitle(song.name)
                .setURL(song.url)
                .setThumbnail(song.thumbnail)
                .setDescription(`${actualSeek} / ${finalTotal}`)
                // .addField('Time Left:', timeLeft)
                .setTimestamp()
                .setFooter(`Requested by: ${message.author.username}`)
            message.channel.send(npEmbed);
        } catch (error) {
            console.log(error);
            message.channel.send(`Still trying to fix it 😖`);
        };
    },
};