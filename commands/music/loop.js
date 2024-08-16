module.exports = {
  name: "loop",
  aliases: ["repeat"],
  description: "put the song on loop",
  async execute(client, message, args, cmd, Discord) {
    const prefix = process.env.PREFIX;

    if (!message.member.voice.channel)
      return message.channel.send("You need to be in a voice channel first. 🤪");

    if (!args[0]) {
      message.channel.send(
        `**${prefix}loop 1** for repeating a song \n**${prefix}loop 2** for repeating all the queue \n**${prefix}loop 0** for disabled`
      );
    } else if (args[0] == 1) {
      client.distube.setRepeatMode(message, 1);
      message.channel.send("Looping the song.");
    } else if (args[0] == 2) {
      client.distube.setRepeatMode(message, 2);
      message.channel.send("Repeating the queue.");
    } else if (args[0] == 0) {
      client.distube.setRepeatMode(message, 0);
      message.channel.send("Repeat mode is set to disabled.");
    } else {
      return message.channel.send("You either put 1 (loop song) or 2 (loop queue) or 0 (disabled), nothing else!");
    }
  },
};
