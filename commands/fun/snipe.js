const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "snipe",
  description: "snipe some message 🔫",
  async execute(client, message, args, cmd, Discord) {
    const url = `https://g.tenor.com/v1/search?q=snipe&key=${process.env.TENORKEY}&ContentFilter=off`;

    const response = await fetch(url);

    const json = await response.json();

    const index = Math.floor(Math.random() * json.results.length);

    const gif = json.results[index].media[0].gif.url;

    const gifEmbed = new Discord.MessageEmbed()
      .setColor("BROWN")
      .setImage(gif)
      .setTitle("SNIPE 🔫")
      .setFooter(`Requested by: ${message.author.username}`);
    message.channel.send(gifEmbed);
  },
};
