module.exports = {
    name: 'anime',
    description: "sends an anime thingy",
    async execute(message, args, Discord) {

        const Anime_Images = require('anime-images-api')
        const API = new Anime_Images()

        const target = message.mentions.users.first();
        
        const query = args.join(' ');

        // SFW
        if ( query === 'hug' ) {
            let { image } = await API.sfw.hug()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`aww 🤗`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'kiss' ) {
            let { image } = await API.sfw.kiss()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('muach 😚')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'slap' ) {
            let { image } = await API.sfw.slap()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`bak bok`)
                .setImage(image)
    
            message.channel.send(animeEmbed);
            
        } else if ( query === 'punch' ) {
            let { image } = await API.sfw.punch()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`ouch pasti sakit`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'wink' ) {
            let { image } = await API.sfw.wink()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`👀`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'pat' ) {
            let { image } = await API.sfw.pat()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('😊')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'kill' ) {
            let { image } = await API.sfw.kill()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('😨')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'cuddle' ) {
            let { image } = await API.sfw.cuddle()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('yes 😊')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'waifu' ) {
            let { image } = await API.sfw.waifu()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`yah 2d 😁`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } 
        
        // NSFW
        if ( query === 'hentai' ) {
            let { image } = await API.nsfw.hentai()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} udah jangan kebanyakan`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'boobs' ) {
            let { image } = await API.nsfw.boobs()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gede gak ?`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'lesbian' ) {
            let { image } = await API.nsfw.lesbian()

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} hmm`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else {
            message.channel.send(`Wrong! try this.. \n NSFW: \`hentai\`, \`boobs\`, \`lesbian\` \n SFW: \`hug\` \`kiss\` \`slap\` \`punch\` \`wink\` \`pat\` \`kill\` \`cuddle\` \`kiss\` \`waifu\` `)
        }
        
        // NO KEYWORD
        if (!query) {
            message.channel.send(`please enter a keyword`)
        }
    }

}