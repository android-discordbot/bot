module.exports = {
  name: "ban",
  description: "bans a member from the server",
  execute(client, message, args, cmd, Discord) {
    const target = message.mentions.users.first();
    if (target) {
      const memberTarget = message.guild.members.cache.get(target.id);
      memberTarget.ban();
      message.channel.send("User has been banned.");
    } else {
      message.channel.send(`You couldn't ban that member!`);
    }
  },
};
