module.exports = {
  name: "shuffle",
  aliases: ["sf"],
  description: "shuffle the queue",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.voice.channel)
      return message.channel.send("You need to be in a voice channel first. 🤪");

    client.distube.shuffle(message);
    message.channel.send("👍 Shuffled.");
  },
};
