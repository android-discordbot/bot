module.exports = {
    name: 'guessthenumber',
    aliases: ['gtn'],
    description: "play guess the number game",
    execute(client, message, args, cmd, Discord) {
	    let number = Math.ceil(Math.random() * 100);
        let finished = false;

        message.channel.send(
            new Discord.MessageEmbed()
                .setTitle(`Guess The Number`)
                .setDescription(`Guess a number (1-100), you have \`1 minute\``)
                .setColor('RANDOM')
                .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTimestamp()
        );

        let collector = new Discord.MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 60000,
        });

        let tries = 0;

        collector.on('collect', async(msg) => {
            if (finished == false) {
                let split = msg.content.split(/ +/);
                let attempt = split.shift();

                if (isNaN(attempt)) return message.reply(`You must choose an actual number`);

                tries++;
    
                if (parseInt(attempt) !== number) return message.reply(`That is incorrect. Please choose again (My number is ${parseInt(msg) < number ? 'higher' : 'lower'} than ${parseInt(msg)})`);
    
                finished = true;
    
                message.channel.send(
                    new Discord.MessageEmbed()
                        .setTitle(`Correct`)
                        .setDescription(`${parseInt(msg)} is correct!`)
                        .setFooter(`It took you ${tries} tries to get it`)
                        .setTimestamp()
                        .setColor('GREEN')
                );
            };
        });
        
        collector.on('end', async(collected) => {
            if (finished == false) return message.reply(`Your time is up! the number is actually **${number}**`);
        });
    
    },
};