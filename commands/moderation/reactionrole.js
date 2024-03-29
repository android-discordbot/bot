module.exports = {
  name: "reactionrole",
  description: "sets up a reaction role message",
  async execute(client, message, args, cmd, Discord) {
    const channel = "819186675576995850";
    const tuaRole = message.guild.roles.cache.get("816573052199763979");
    const mudaRole = message.guild.roles.cache.get("816573055064997898");

    const tuaRoleEmoji = "👴🏻";
    const mudaRoleEmoji = "👦🏽";

    message.delete(message.author);

    let embed = new Discord.MessageEmbed()
      .setColor("#FFFF00")
      .setTitle("Pilih Kaum Anda")
      .setDescription(
        "Pilih kaum anda untuk menentukan anda merasa sudah tua atau masih muda!\n\n" +
          `${tuaRole} for kaum tua\n` +
          `${mudaRole} for kaum muda`
      );

    let messageEmbed = await message.channel.send(embed);
    messageEmbed.react(tuaRoleEmoji);
    messageEmbed.react(mudaRoleEmoji);

    client.on("messageReactionAdd", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === tuaRoleEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(tuaRole);
        }
        if (reaction.emoji.name === mudaRoleEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.add(mudaRole);
        }
      } else {
        return;
      }
    });

    client.on("messageReactionRemove", async (reaction, user) => {
      if (reaction.message.partial) await reaction.message.fetch();
      if (reaction.partial) await reaction.fetch();
      if (!reaction.message.guild) return;

      if (reaction.message.channel.id == channel) {
        if (reaction.emoji.name === tuaRoleEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(tuaRole);
        }
        if (reaction.emoji.name === mudaRoleEmoji) {
          await reaction.message.guild.members.cache.get(user.id).roles.remove(mudaRole);
        }
      } else {
        return;
      }
    });
  },
};
