module.exports = async (client, Discord, DisTube) => {
    client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
    client.distube
        .on("playSong", (message, queue, song) => {
            message.channel.send(`🎵  Playing ***${song.name}***  🎵`);
        })

        .on("addSong", (message, queue, song) => { 
            message.channel.send(`Added **${song.name}** - \`${song.formattedDuration}\` to the queue`);
        })

        .on("playList", (message, queue, playlist, song) => {
            const playlistEmbed = new Discord.MessageEmbed()
                .setAuthor('Added Playlist')
                .setTitle(playlist.name)
                .setURL(playlist.url)
                .setColor("#7FFF00")
                .setThumbnail(song.thumbnail)
                .setDescription(`**🎵  Now playing [${song.name}](${song.url})  🎵 **- \`${song.formattedDuration}\``)
                .addFields(
                    { name: `Playlist Songs:`, value: `${playlist.songs.length} songs` },
                    { name: `Playlist Duration:`, value: `${playlist.formattedDuration}` }
                    )
                .setTimestamp()
                .setFooter(`Requested by: ${song.user.username}`)
            message.channel.send(playlistEmbed);
        })

        .on("addList", (message, queue, playlist) => {
            message.channel.send(`Added **${playlist.name}** playlist \`${playlist.songs.length} songs\` to the queue`);
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
