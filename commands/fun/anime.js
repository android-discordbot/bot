module.exports = {
    name: 'anime',
    description: "send an anime gif from API",
    async execute(client, message, args, cmd, Discord) {
        
        const Anime_Images = require('anime-images-api');
        const API = new Anime_Images();
        
        const query = args.join(' ');
        
        // NO KEYWORD
        if (!query) return message.channel.send(`please enter a keyword`);

        // SFW
        if ( query === 'hug' ) {
            let { image } = await API.sfw.hug();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`aww 🤗`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'kiss' ) {
            let { image } = await API.sfw.kiss();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('muach 😚')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'slap' ) {
            let { image } = await API.sfw.slap();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`bak bok`)
                .setImage(image)
    
            message.channel.send(animeEmbed);
            
        } else if ( query === 'punch' ) {
            let { image } = await API.sfw.punch();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`yeees`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'wink' ) {
            let { image } = await API.sfw.wink();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`👀`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'pat' ) {
            let { image } = await API.sfw.pat();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('😊')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'kill' ) {
            let { image } = await API.sfw.kill();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('😨')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'cuddle' ) {
            let { image } = await API.sfw.cuddle();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle('yes 😊')
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'waifu' ) {
            let { image } = await API.sfw.waifu();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`yah 2d 😁`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        }

        // NSFW
        else if ( query === 'hentai' ) {
            let { image } = await API.nsfw.hentai();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} udah jangan kebanyakan`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'boobs' ) {
            let { image } = await API.nsfw.boobs();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} gede gak ?`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else if ( query === 'lesbian' ) {
            let { image } = await API.nsfw.lesbian();

            // *embed
            const animeEmbed = new Discord.MessageEmbed()
                .setTitle(`${message.author.username} hmm`)
                .setImage(image)
    
            message.channel.send(animeEmbed);

        } else {
            message.channel.send(`Wrong! Try this.. \n NSFW: \`hentai\`, \`boobs\`, \`lesbian\` \n SFW: \`hug\` \`kiss\` \`slap\` \`punch\` \`wink\` \`pat\` \`kill\` \`cuddle\` \`kiss\` \`waifu\` `);
        };
        
    },

};