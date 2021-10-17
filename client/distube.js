module.exports = async (client) => {
    const DisTube = require('distube');
    client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
    client.distube
    .on("playSong", (message, queue, song) => {
        const { MessageEmbed } = require('discord.js');
        const playingEmbed = new MessageEmbed()
            .setAuthor('🎵 Now Playing 🎵')
            .setTitle(`${song.name}`)
            .setURL(`${song.url}`)
            .setDescription(`${song.formattedDuration}`)
            .setColor("#7FFF00")
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playingEmbed);
    })

    .on("addSong", (message, queue, song) => { 
        message.channel.send(`Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue`)
    })

    .on("playList", (message, queue, playlist, song) => {
        const { MessageEmbed } = require('discord.js');
        const playlistEmbed = new MessageEmbed()
            .setAuthor('Aded Playlist')
            .setTitle(`${playlist.name}`)
            .setDescription(`There are ${playlist.songs.length} songs`)
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playlistEmbed);
        message.channel.send(`🎵 Now playing ${song.name} - \`${song.formattedDuration}\`\n`)
    })

    .on("addList", (message, queue, playlist) => {
        message.channel.send(`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n`)
    })
    .on("error", (message, err) => message.channel.send("An error encountered: " + err))
    .on("empty", message => message.channel.send("Channel is empty (⊙_⊙;) Leaving.."));
}