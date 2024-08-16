module.exports = {
  name: "playskip",
  aliases: ["ps"],
  description: "add the song top of the queue and then skip to it",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.voice.channel) {
      return message.channel.send("You need to be in a voice channel first. 🤪");
    }

    const music = args.join(" ");

    if (!music) return message.channel.send("Put the name of the song or you can put a link too.");

    client.distube.play(message.member.voice.channel, music, {
      message,
      textChannel: message.channel,
      member: message.member,
      skip: true,
    });
  },
};
