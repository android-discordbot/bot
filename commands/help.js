module.exports = {
    name: 'help',
    description: "This sends the list of commands!",
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#12A5F1')
        .setTitle('List of Commands')
        .setURL('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw')
        .setDescription('Ni buat yg nyari bisa apa aja gw')
        .addFields(
            {name: '#ping', value: 'cek ping'},
            {name: '#rules', value: 'kirim peraturan server'},
            {name: '#youtube', value: 'kasih link youtube'},
            {name: '#kick (tagorangnyasu)', value: 'parah kick!'},
            {name: '#ban (tagorangnyasu)', value: 'ban member'},
            {name: '#clear 1', value: 'apus message'},
            {name: '#mute (tagorangnyasu) 4s', value: 'mute orang sementara'},
            {name: '#mute (tagorangnyasu)', value: 'mute Memeber'},
            {name: '#unmute (tagorangnyasu)', value: 'unmute Memeber'},
            {name: '#help', value: 'list semua command'},
            {name: '#play', value: 'ngeplay lagu dari youtube'},
            {name: '#leave', value: 'buat ngusir bot'},
            {name: '#image apa aja', value: 'cari gambar di google'},
            {name: '#reactionrole', value: 'pilih role (ada 3 guys)'},
            {name: '#gif apa aja', value: 'kirim gif dari tenor'},
            {name: '#hey', value: 'sapa sapa aja'},
            {name: '#avatar', value: 'liat profile pic, bisa juga kl tag orang'},
            {name: '#weather jakarta', value: 'dukun cuaca'},
            {name: '#meme', value: 'meme dari Reddit (kadang gak bisa karna diblokir su)'},
            {name: '#ticket', value: 'bikin channel private bersama admin'},
            {name: '#invite', value: 'invite aku ke servermu :)'},
            {name: '#stats playing bokep', value: 'ganti status bot | #stats reset'},
            )
            .setImage('https://hackernoon.com/hn-images/1*6Da9jqVrnGsxWilCOBoejg.jpeg')
            .setFooter('kl ada yg ga bisa, yaa sudahlah ;(');

        message.channel.send(newEmbed);

    }

}