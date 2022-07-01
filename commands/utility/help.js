module.exports = {
  name: "help",
  aliases: ["h", "d", "details", "detail"],
  description: "sends a link to a website that list all of the commands",
  execute(client, message, args, cmd, Discord) {
    const embed = new Discord.MessageEmbed()
      .setTitle(`Click Here `)
      .setURL("https://android-discordbot.github.io/web/")
      .setDescription(`It will take you to a website with full list of all commands and what it is use for`)
      .setColor("RANDOM");
    return message.channel.send(embed);
  },
};
