const { SpotifyPlugin } = require("@distube/spotify");
const { SoundCloudPlugin } = require("@distube/soundcloud");

let spotifyoptions = {
    parallel: true,
    emitEventsAfterFetching: true,
}

spotifyoptions.api = {
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
}


module.exports = async (client, Discord, DisTube) => {
    client.distube = new DisTube.default(client, { 
        searchSongs: 0, 
        emitNewSongOnly: true, 
        leaveOnFinish: true, 
        youtubeDL: false,
        nsfw: true,
        ytdlOptions: {
            quality: "highestaudio",
            format: "audioonly",
        },
        plugins: [
            new SpotifyPlugin(spotifyoptions),
            new SoundCloudPlugin()
        ]
    });
    
    client.distube
        .on("playSong", (queue, song) => {
            queue.textChannel.send(`🎵  Playing ***${song.name}***  🎵`);
        })

        .on("addSong", (queue, song) => { 
            queue.textChannel.send(`Added **${song.name}** - \`${song.formattedDuration}\` to the queue`);
        })

        .on("addList", (queue, playlist) => {
            const playlistEmbed = new Discord.MessageEmbed()
                .setAuthor('Added Playlist')
                .setTitle(playlist.name)
                .setURL(playlist.url)
                .setColor("#7FFF00")
                .setThumbnail(playlist.thumbnail)
                .addFields(
                    { name: `Playlist Songs:`, value: `${playlist.songs.length} songs` },
                    { name: `Playlist Duration:`, value: `${playlist.formattedDuration}` }
                    )
                .setTimestamp()
                .setFooter(`Requested by: ${playlist.user.username}`)
            queue.textChannel.send(playlistEmbed);
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