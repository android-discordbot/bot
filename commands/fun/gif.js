const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
    description: "Sends a gif from tenor",
    async execute(client, message, args, cmd, Discord) {
        let keywords = args.join(' ');

        if (!keywords) return message.channel.send('kasih kata kunci nya bos');

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();

        const index = Math.floor(Math.random() * json.results.length);

        let gif = json.results[index].url;

        // *sending gif by regular message
        message.channel.send(gif);
    },
};