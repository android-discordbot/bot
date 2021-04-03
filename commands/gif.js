const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
    description: "Sends a gif from tenor",
    async execute(message, args ) {

        message.channel.send(`Searching...`).then((msg) => {
            setTimeout(() => msg.delete(), 2000);
            setTimeout(() => message.delete(), 2000);
        }).catch((err) => {
            throw err;
        })

        let tokens = message.content.split(' ');
        
        let keywords = 'coding train';        
        if (tokens.length > 1){
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();
       

        const index = Math.floor(Math.random() * json.results.length);

        message.channel.send(json.results[index].url);

        
    }
}