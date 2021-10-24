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
            .setAuthor('Aded Playlist')
            .setTitle(`${playlist.name}`)
            .setDescription(`There are ${playlist.songs.length} songs`)
            .addFields({name: `🎵 Now playing ${song.name} - \`${song.formattedDuration}\``, value: ' '})
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playlistEmbed);
    })

    .on("addList", (message, queue, playlist) => {
        message.channel.send(`Added **${playlist.name}** playlist \`${playlist.songs.length} songs\` to queue`);
    })

    .on("error", (message, err) => message.channel.send("An error encountered: \n" + err))

    .on("empty", message => message.channel.send(`Channel is empty, so I'm Leaving.. 😢`));
}