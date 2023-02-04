const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "gif",
  description: "sends a gif from tenor",
  async execute(client, message, args, cmd, Discord) {
    const keywords = args.join(" ");

    if (!keywords) return message.channel.send("Please provide a keyword!");

    const url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`;

    const response = await fetch(url);

    const json = await response.json();

    const index = Math.floor(Math.random() * json.results.length);

    const gif = json.results[index].media[0].gif.url;

    const gifEmbed = new Discord.MessageEmbed()
      .setColor("#00ffff")
      .setImage(gif)
      .setTitle(`GIF ${keywords}`)
      .setFooter(`Requested by: ${message.author.username}`);
    message.channel.send(gifEmbed);
  },
};
