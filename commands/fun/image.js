var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
        headless: true,
        args: ['--no-sandbox']
    }
})
 
module.exports = {
    name: 'image',
    aliases: ['i'],
    description: "Sends an image from google",
    async execute(client, message, args, cmd, Discord) {
        const query = args.join(" ");
        if (!query) return message.channel.send('Please enter a keyword');
 
        var random = Math.floor((Math.random() * 90) + 0);
        console.log(random);
        
        const results = await google.scrape(query, 100);
        
        const image = results[random].url;
        
        let embedpic = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Image of *${query}*`)
            .setImage(image)
        message.channel.send(embedpic);
    }
}