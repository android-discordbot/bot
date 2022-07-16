const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

module.exports = {
    name: 'snipe',
    description: "snipe some message 🔫",
    async execute(client, message, args, cmd, Discord) {
        let url = `https://g.tenor.com/v1/search?q=snipe&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();

        let index = Math.floor(Math.random() * json.results.length);

        let gif = json.results[index].media[0].gif.url;
        
        const gifEmbed = new Discord.MessageEmbed()
            .setColor('BROWN')
            .setImage(gif)
            .setTitle(`SNIPE :gun:`)
            .setFooter(`Requested by: ${message.author.username}`);
        message.channel.send(gifEmbed);
    },
};