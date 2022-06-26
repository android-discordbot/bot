module.exports = async (client, Discord, DisTube) => {
    client.distube = new DisTube.default(client, { 
        searchSongs: 0, 
        emitNewSongOnly: true, 
        leaveOnFinish: true, 
        youtubeDL: false 
    });
    
    client.distube
        .on("playSong", (queue, song) => {
            if (song.playlist) {
                const playlistEmbed = new Discord.MessageEmbed()
                    .setAuthor('Added Playlist')
                    .setTitle(song.playlist.name)
                    .setURL(song.playlist.url)
                    .setColor("#7FFF00")
                    .setThumbnail(song.thumbnail)
                    .setDescription(`**🎵  Now playing [${song.name}](${song.url})  🎵 **- \`${song.formattedDuration}\``)
                    .addFields(
                        { name: `Playlist Songs:`, value: `${song.playlist.songs.length} songs` },
                        { name: `Playlist Duration:`, value: `${song.playlist.formattedDuration}` }
                        )
                    .setTimestamp()
                    .setFooter(`Requested by: ${song.user.username}`)
                queue.textChannel.send(playlistEmbed);
            } else {
                queue.textChannel.send(`🎵  Playing ***${song.name}***  🎵`);
            }
        })

        .on("addSong", (queue, song) => { 
            queue.textChannel.send(`Added **${song.name}** - \`${song.formattedDuration}\` to the queue`);
        })

        .on("addList", (queue, playlist) => {
            queue.textChannel.send(`Added **${playlist.name}** playlist \`${playlist.songs.length} songs\` to the queue`);
        })

        .on("error", (channel, err) => {
            const errEmbed = new Discord.MessageEmbed()
                .setTitle('An Error Encountered')
                .setColor('RED')
                .addFields({name: err, value: `\u200b`})
                .setTimestamp()	
            channel.send(errEmbed);
        })

        .on("finish", queue => {
            queue.textChannel.send(`Yey I've finnished the queue. Leaving the voice channel now 😥`)
        })

        .on("empty", queue => queue.textChannel.send(`Channel is empty, so I'm Leaving.. 😢`));
};