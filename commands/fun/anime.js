function embed(title, image, Discord, message) {
  const animeEmbed = new Discord.MessageEmbed().setTitle(title).setImage(image);

  message.channel.send(animeEmbed);
}

module.exports = {
  name: "anime",
  description: "send an anime gif from an API",
  async execute(client, message, args, cmd, Discord) {
    const Anime_Images = require("anime-images-api");
    const API = new Anime_Images();

    const query = args.join(" ");

    // NO KEYWORD
    if (!query) return message.channel.send(`please enter a keyword`);

    // ======================== SFW ========================
    if (query === "hug") {
      const { image } = await API.sfw.hug();
      const title = "aww 🤗";
      embed(title, image, Discord, message);
    } else if (query === "kiss") {
      const { image } = await API.sfw.kiss();
      const title = "muach 😚";
      embed(title, image, Discord, message);
    } else if (query === "slap") {
      const { image } = await API.sfw.slap();
      const title = "bak bok";
      embed(title, image, Discord, message);
    } else if (query === "punch") {
      const { image } = await API.sfw.punch();
      const title = "yeees";
      embed(title, image, Discord, message);
    } else if (query === "wink") {
      const { image } = await API.sfw.wink();
      const title = "👀";
      embed(title, image, Discord, message);
    } else if (query === "pat") {
      const { image } = await API.sfw.pat();
      const title = "😊";
      embed(title, image, Discord, message);
    } else if (query === "kill") {
      const { image } = await API.sfw.kill();
      const title = "😨";
      embed(title, image, Discord, message);
    } else if (query === "cuddle") {
      const { image } = await API.sfw.cuddle();
      const title = "yes 😊";
      embed(title, image, Discord, message);
    } else if (query === "waifu") {
      const { image } = await API.sfw.waifu();
      const title = "yah 2d 😁";
      embed(title, image, Discord, message);

      // ======================== NSFW ========================
    } else if (query === "hentai") {
      const { image } = await API.nsfw.hentai();
      const title = `${message.author.username} udah jangan kebanyakan`;
      embed(title, image, Discord, message);
    } else if (query === "boobs") {
      const { image } = await API.nsfw.boobs();
      const title = `${message.author.username} gede gak ?`;
      embed(title, image, Discord, message);
    } else if (query === "lesbian") {
      const { image } = await API.nsfw.lesbian();
      const title = `${message.author.username} hmm`;
      embed(title, image, Discord, message);
    } else {
      message.channel.send(
        `**Wrong! Try this..** \nNSFW: \`hentai\`, \`boobs\`, \`lesbian\` \nSFW: \`hug\`, \`kiss\`, \`slap\`, \`punch\`, \`wink\`, \`pat\`, \`kill\`, \`cuddle\`, \`kiss\`, \`waifu\``
      );
    }
  },
};
