module.exports = {
    name: 'helpmusic',
    description: "This sends the list of music commands!",
    execute(client, message, args, cmd, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#12A5F1')
        .setTitle('Music Commands')
        .setURL('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw')
        .setDescription('Ni buat yg nyari music command gw')
        .addFields(
            {name: '#play', value: 'ngeplay lagu dari youtube'},
            {name: '#playskip', value: 'yang pake org suka nyelak antrian'},
            {name: '#dc', value: 'buat ngusir bot'},
            {name: '#q', value: 'liat antrian'},
            {name: '#s', value: 'skip skip'},
            {name: '#sf', value: 'mengacak ngacak antrian'},
            {name: '#loop', value: 'puter ulang gak bisa dimatiin'},
            {name: '#ap', value: 'autoplay lagu kl antrian abis'},
            {name: '#pause', value: 'pause lagunya'},
            {name: '#resume', value: 'lanjutin lagunya'},
            {name: '#seek', value: 'loncatin lagu kali yaa?'},
            )
            .setImage('https://hackernoon.com/hn-images/1*6Da9jqVrnGsxWilCOBoejg.jpeg')
            .setFooter('kl ada yg ga bisa, yaa sudahlah ;(');

        message.channel.send(newEmbed);

    }

}