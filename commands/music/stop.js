module.exports = {
  name: "stop",
  aliases: ["st", "dc"],
  description: "stop the music and leave the voice channel",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.voice.channel)
      return message.channel.send("You need to be in a voice channel first. 🤪");
    let queue = await client.distube.getQueue(message);

    if (queue) {
      client.distube.stop(message);
      message.channel.send(`Bye I'm out... 🤭`);
    } else if (!queue) {
      return;
    }
  },
};
