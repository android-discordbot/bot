const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "giphy",
  aliases: ["gip", "gipy"],
  description: "gif command from giphy",
  async execute(client, message, args, cmd, Discord) {
    const keywords = args.join(" ");

    if (!keywords) return message.channel.send("Please provide a keyword!");

    const url = `https://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${process.env.giphyAPIKey}&limit=10`;

    const response = await fetch(url);

    const json = await response.json();

    if (json.data.length <= 0) return message.channel.send("No GIFs found!");

    const random = Math.floor(Math.random() * json.data.length);

    const gif = json.data[random].images.downsized.url;

    const gifEmbed = new Discord.MessageEmbed()
      .setColor("#00ffff")
      .setImage(gif)
      .setTitle(keywords)
      .setFooter(`Requested by: ${message.author.username}`);

    message.channel.send(gifEmbed);
  },
};
