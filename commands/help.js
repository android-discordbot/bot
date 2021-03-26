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
            {name: '#kick <user>', value: 'parah kick!'},
            {name: '#ban <user>', value: 'ban member'},
            {name: '#clear <angka>', value: 'apus message'},
            {name: '#mute <user> <brp lama>', value: 'mute orang sementara'},
            {name: '#mute <user>', value: 'mute Memeber'},
            {name: '#unmute <user>', value: 'unmute Memeber'},
            {name: '#help', value: 'list semua command'},
            {name: '#play', value: 'ngeplay lagu dari youtube'},
            {name: '#leave', value: 'buat ngusir bot'},
            {name: '#image <keyword>', value: 'cari gambar di google'},
            {name: '#reactionrole', value: 'pilih role'},
            {name: '#gif <keyword>', value: 'kirim gif dari tenor'},
            {name: '#hey', value: 'sapa aja lah'},
            {name: '#avatar', value: 'aduh kepo dah'},
            {name: '#weather <lokasinya>', value: 'dukun cuaca'},
            {name: '#meme', value: 'meme dari Reddit (kadang gak bisa karna diblokir su)'},
            {name: '#ticket', value: 'bikin channel private bersama admin'},
            {name: '#stats', value: 'ganti / tambah status bot'},


        )
        .setImage('https://hackernoon.com/hn-images/1*6Da9jqVrnGsxWilCOBoejg.jpeg')
        .setFooter('oke  gud :)');

        message.channel.send(newEmbed);

    }

}