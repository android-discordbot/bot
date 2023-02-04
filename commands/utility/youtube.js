module.exports = {
  name: "youtube",
  description: "sends a youtube link for people with a specific role",
  execute(client, message, args, cmd, Discord) {
    const role = message.member.roles.cache.has("702014991435563009");
    if (!role)
      return message.channel.send(
        "It looks like there's no such role, so you can't run this command."
      );

    if (role) {
      message.channel.send("https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw");
    } else {
      message.channel.send("Nope can't do that 😠, ok try again.");
      message.member.roles.add("702014991435563009");
    }
  },
};
