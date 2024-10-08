const randomPuppy = require("random-puppy");

module.exports = {
  name: "meme",
  description: "sends a random meme from a subreddit",
  async execute(client, message, args, cmd, Discord) {
    try {
      const subReddits = [
        "dankmemes",
        "PewdiepieSubmissions",
        "meme",
        "memes",
        "2meirl4meirl",
        "wholesomememes",
        "CrappyDesign",
      ];
      const random = subReddits[Math.floor(Math.random() * subReddits.length)];

      const image = await randomPuppy(random);

      const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(image)
        .setTitle(`This meme is from r/${random}`)
        .setURL(`https://reddit.com/r${random}`);

      message.channel.send(memeEmbed);
    } catch (error) {
      console.error(error);
      return message.channel.send("There's an error in the command!");
    }
  },
};
