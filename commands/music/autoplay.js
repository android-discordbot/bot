module.exports = {
  name: "autoplay",
  aliases: ["auto", "ap"],
  description: "turn autoplay on or off",
  async execute(client, message, args, cmd, Discord) {
    if (!message.member.voice.channel) {
      return message.channel.send("you need to be in a voice channel first 🤪");
    }

    const server_queue = client.distube.getQueue(message);
    if (!server_queue) return message.channel.send("📫 Queue is empty!");

    let mode = client.distube.toggleAutoplay(message);
    message.channel.send("Set autoplay mode to `" + (mode ? "On" : "Off") + "`");
  },
};
