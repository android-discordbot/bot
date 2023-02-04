module.exports = async (client) => {
  client.on("guildMemberRemove", (member) => {
    let byeChannel = member.guild.channels.cache.get("817394884516118599");
    let byeChannel2 = member.guild.channels.cache.get("786207984040149002");

    if (!byeChannel) {
      byeChannel2.send(`**${member}** baru aja keluar dari server.. Bye Bye Panteq. 👋`);
    } else if (!byeChannel2) {
      byeChannel.send(
        `**${member}** baru aja keluar dari server.. anda tidak bisa jadi sang master. 👋`
      );
    } else {
      return;
    }
  });
};
