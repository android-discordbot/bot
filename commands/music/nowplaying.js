module.exports = {
  name: "nowplaying",
  aliases: ["np"],
  description: "show detail what music is being played",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.voice.channel)
      return message.channel.send("You need to be in a voice channel first 🤪");

    const server_queue = client.distube.getQueue(message);
    if (!server_queue) return message.channel.send("No music is playing.");

    const song = server_queue.songs[0];
    if (!song) return message.channel.send("No music is playing.");

    try {
      const actualSeek = server_queue.formattedCurrentTime;
      const finalTotal = song.formattedDuration;

      const npEmbed = new Discord.MessageEmbed()
        .setColor("#7FFF00")
        .setAuthor("🎵 Now Playing 🎵")
        .setTitle(song.name)
        .setURL(song.url)
        .setThumbnail(song.thumbnail)
        .setDescription(`${actualSeek} / ${finalTotal}`)
        .setTimestamp()
        .setFooter(`Requested by: ${message.author.username}`);
      message.channel.send(npEmbed);
    } catch (error) {
      console.error(error);
      message.channel.send("Still trying to fix it. 😖");
    }
  },
};
