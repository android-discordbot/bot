const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
    description: "sends a gif from tenor",
    async execute(client, message, args, cmd, Discord) {
        let keywords = args.join(' ');

        if (!keywords) return message.channel.send('please provide a keyword');

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();

        let index = Math.floor(Math.random() * json.results.length);

        let gif = json.results[index].media[0].gif.url;
        
        const gifEmbed = new Discord.MessageEmbed()
            .setColor('#00ffff')
            .setImage(gif)
            .setTitle(`GIF ${keywords}`)
            .setFooter(`Requested by: ${message.author.username}`);
        message.channel.send(gifEmbed);
    },
};