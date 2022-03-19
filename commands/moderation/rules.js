module.exports = {
    name: 'rules',
    description: "Rules in General",
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#12A5F1')
            .setTitle('Rules')
            .setURL('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw')
            .setDescription('Ini peraturannya panteq dibaca ya asu')
            .addFields(
                {name: 'Rule 1', value: 'Yang Aneh Aneh Deh Asu'},
                {name: 'Rule 2', value: 'Jangan, Udah Jangan Dah Pokoknya'},
                {name: 'Rule 3', value: 'Yang Deafen Atau Server Mute Member GW EWE'},
            )
            .setImage('https://pbs.twimg.com/profile_images/1276630009793245184/_5QTqo7X_400x400.jpg')
            .setFooter('Baca Peraturannya Panteq');

        message.channel.send(newEmbed);
    },
};