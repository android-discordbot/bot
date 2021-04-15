const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
    description: "Sends a gif from tenor",
    async execute(message, args ) {

        // unsend the message
        message.channel.send(`Searching...`).then((msg) => {
            setTimeout(() => msg.delete(), 2000);
            setTimeout(() => message.delete(), 2000);
        }).catch((err) => {
            throw err;
        })
        // unsend the message

        let tokens = message.content.split(' ');
        
        let keywords = 'tenor';        
        if (tokens.length > 1){
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();
       

        const index = Math.floor(Math.random() * json.results.length);

        message.channel.send(json.results[index].url);
        message.channel.send(`Requested by: ${message.author}`);

        
    }
}