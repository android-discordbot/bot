const ultrax = require("ultrax");

module.exports = {
    name: 'sussybaka',
    description: 'sussybaka command',
    async execute(message, args, Discord, client) {
        
        let user = message.mentions.users.first() || message.author;
        let avatar = user.displayAvatarURL({ format: "png" });
        let sussybaka = new ultrax.sussyBaka(avatar);
        const { sus } = await sussybaka.get();

        console.log(sus);

        const sussyEmbed = new Discord.MessageEmbed()
        .setTitle(`you're acting kinda sus y'know, you lil sussybaka`)
        .setImage(sus)

        message.channel.send(sussyEmbed);
    
    },
};

