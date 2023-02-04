module.exports = {
  name: "resume",
  aliases: ["continue"],
  description: "resume paused music",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.voice.channel)
      return message.channel.send("You need to be in a voice channel first. 🤪");

    client.distube.resume(message);
    message.channel.send("Continuing stream... 😄");
  },
};
