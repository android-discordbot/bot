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
        // let gif = json.results[index].media[0].url;
        
        // *sending gif by regular message
        message.channel.send(gif);

        /*
        *sending gif through embed 
        let embedgif = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`GIF ${keywords}`)
            .setImage(gif)
            .setFooter(`Requested by: ${message.author.username}`)

        message.channel.send(embedgif)
        .then(console.log(json.results[index].media[0].url));
        */
    }
}


// TODO Make Sending GIF Through Embed WORK
// for now it sends a poop picture 