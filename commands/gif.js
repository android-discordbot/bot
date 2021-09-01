const fetch = require('node-fetch');

module.exports = {
    name: 'gif',
    description: "Sends a gif from tenor",
    async execute(message, args, Discord) {

        // *unsending the keywords
        message.channel.send(`Searching...`).then((msg) => {
            setTimeout(() => msg.delete(), 2000);
            setTimeout(() => message.delete(), 2000);
        }).catch((err) => {
            throw err;
        })




        let tokens = message.content.split(' ');
        
        let keywords = 'tenor';        
        if (tokens.length > 1){
            keywords = tokens.slice(1, tokens.length).join(" ");
        }

        let url = `https://g.tenor.com/v1/search?q=${keywords}&key=${process.env.TENORKEY}&ContentFilter=off`;
        
        let respose = await fetch(url);
        
        let json = await respose.json();

        const index = Math.floor(Math.random() * json.results.length);

        let gif = json.results[index].url;
        // let gif = json.results[index].media[0].url;
        
        // *sending gif by regular message
        // message.channel.send(gif);
        // message.channel.send(`GIF ${keywords} Requested by: ${message.author}`);



        // *sending gif through embed 
        let embedgif = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`GIF ${keywords}`)
        .setImage(gif)
        .setFooter(`Requested by: ${message.author.username}`)

        message.channel.send(embedgif)
        .then(console.log(json.results[index].media[0].url));

        
    }
}


// TODO Make Sending GIF Through Embed WORK
// for now it sends a poop picture 