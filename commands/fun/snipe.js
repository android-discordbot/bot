const fetch = require('node-fetch');

module.exports = {
    name: 'snipe',
    description: "snipe some messages 🔫",
    async execute(client, message, args, cmd, Discord) {
        let url = `https://g.tenor.com/v1/search?q=snipe&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();

        const index = Math.floor(Math.random() * json.results.length);

        let gif = json.results[index].url;
        
        message.channel.send(gif);
    },
};