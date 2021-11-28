module.exports = async (client, Discord, DisTube) => {
    client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
    client.distube
    .on("playSong", (message, queue, song) => {
        const playingEmbed = new Discord.MessageEmbed()
            .setAuthor('🎵 Now Playing 🎵')
            .setTitle(song.name)
            .setURL(song.url)
            .setThumbnail(song.thumbnail)
            .setDescription(song.formattedDuration)
            .setColor("#7FFF00")
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playingEmbed);
    })

    .on("addSong", (message, queue, song) => { 
        message.channel.send(`Added **${song.name}** - \`${song.formattedDuration}\` to the queue`);
    })

    .on("playList", (message, queue, playlist, song) => {
        const playlistEmbed = new Discord.MessageEmbed()
            .setAuthor('Added Playlist')
            .setTitle(playlist.name)
			.setColor("#7FFF00")
			.setThumbnail(song.thumbnail)
            .setDescription(`Playlist Contains: ${playlist.songs.length} songs \n Playlist Duration: ${playlist.formattedDuration}`)
			.addFields(
                {name: `\u200b`, value: `\u200b`},
                {name: `🎵  Now playing the first song  🎵`, value: `${song.name} - \`${song.formattedDuration}\``}
                )
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playlistEmbed);
    })

    .on("addList", (message, queue, playlist) => {
        message.channel.send(`Added **${playlist.name}** playlist \`${playlist.songs.length} songs\` to queue`);
    })

    .on("error", (message, err) => {
		const errEmbed = new Discord.MessageEmbed()
			.setTitle('An Error Encountered')
			.setColor('RED')
			.addFields({name: err, value: `\u200b`})
			.setTimestamp()	
		message.channel.send(errEmbed);
	})

    .on("finish", message => message.channel.send(`Yey I've Finnished the queue`))

    .on("empty", message => message.channel.send(`Channel is empty, so I'm Leaving.. 😢`));
};