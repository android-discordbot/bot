const randomPuppy = require('random-puppy');

module.exports = {
    name: "meme",
    description: "send a random meme from a subreddit",
    async execute(message, args, Discord) {
        const subReddits = [ "dankmemes", "PewdiepieSubmissions", "meme", "memes", "2meirl4meirl", "wholesomememes", "CrappyDesign" ];
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];

        const image = await randomPuppy(random);

        const memeEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(image)
        .setTitle(`This meme is from r/${random}`)
        .setURL(`https://reddit.com/r${random}`)

        message.channel.send(memeEmbed);

    }
}