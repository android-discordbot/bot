module.exports = async (client) => {
  client.on("guildMemberAdd", async (guildMember) => {
    let welcomeChannel = guildMember.guild.channels.cache.get("817394884516118599");
    let welcomeChannel2 = guildMember.guild.channels.cache.get("777889342701568000");

    if (!welcomeChannel) {
      welcomeChannel2.send(`${guildMember} welcome to ssta!! 🙋‍♂️`);
    } else if (!welcomeChannel2) {
      welcomeChannel.send(`${guildMember} oy tot, welkom to de cleb yo!!`);
    } else {
      return;
    }
  });
};
