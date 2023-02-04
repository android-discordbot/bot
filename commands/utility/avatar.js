module.exports = {
  name: "avatar",
  aliases: ["pp", "profile"],
  description: "view avatar of the user",
  execute(client, message, args, cmd, Discord) {
    const member = message.mentions.users.first() || message.author;

    const avatar = member.displayAvatarURL({ size: 1024 });

    const embed = new Discord.MessageEmbed()
      .setTitle(`${member.username}'s avatar`)
      .setImage(avatar)
      .setColor("#4CC417");

    message.channel.send(embed);
  },
};
