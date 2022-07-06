const fetch = require('node-fetch');

module.exports = {
    name: 'giphy',
    aliases: ['gip', 'gipy'],
    description: "gif command from giphy",
    async execute(client, message, args, cmd, Discord) {
        const keywords = args.join(' ');
        
        if (!keywords) return message.channel.send('please provide a keyword');

        let res = fetch(`https://api.giphy.com/v1/gifs/search?q=${keywords}&api_key=${process.env.giphyAPIKey}&limit=1`)
            .then((res) => res.json())
            .then((json) => {
                if (json.data.length <= 0) return message.channel.send('No GIFs found!');

                const random = Math.floor(Math.random() * json.data.length);
                
                const gif = json.data[random].url;
                
                message.channel.send(gif);
            });
    },
};