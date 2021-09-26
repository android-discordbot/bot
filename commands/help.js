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
            {name: '#kick *@orangngeselin*', value: 'parah kick!'},
            {name: '#ban *@orangngeselin*', value: 'ban member'},
            {name: '#clear 1', value: 'apus message'},
            {name: '#mute *@orangngeselin* 4s', value: 'mute orang sementara'},
            {name: '#mute *@orangngeselin*', value: 'mute Memeber'},
            {name: '#unmute *@orangngeselin*', value: 'unmute Memeber'},
            {name: '#help', value: 'list semua command'},
            {name: '#image *kebakaran*', value: 'cari gambar di google'},
            {name: '#reactionrole', value: 'pilih role (ada 3 guys)'},
            {name: '#gif *kebakaran*', value: 'kirim gif dari tenor'},
            {name: '#hey', value: 'sapa sapa aja'},
            {name: '#avatar', value: 'liat profile pic, bisa juga kl tag orang'},
            {name: '#weather *jakarta*', value: 'dukun cuaca'},
            {name: '#meme', value: 'meme dari Reddit (kadang gak bisa karna diblokir su)'},
            {name: '#ticket', value: 'bikin channel private bersama admin'},
            {name: '#invite', value: 'invite aku ke servermu :)'},
            {name: '#stats playing bokep', value: 'ganti status bot | #stats reset'},

            {name: '#play', value: 'ngeplay lagu dari youtube', inline: true},
            {name: '#playskip', value: 'yang pake org suka nyelak antrian', inline: true},
            {name: '#dc', value: 'buat ngusir bot', inline: true},
            {name: '#q', value: 'liat antrian', inline: true},
            {name: '#s', value: 'skip skip', inline: true},
            {name: '#sf', value: 'mengacak ngacak antrian', inline: true},
            {name: '#loop', value: 'puter ulang gak bisa dimatiin', inline: true},
            {name: '#ap', value: 'autoplay lagu kl antrian abis', inline: true},
            {name: '#pause', value: 'pause lagunya', inline: true},
            {name: '#resume', value: 'lanjutin lagunya', inline: true},
            {name: '#seek', value: 'loncatin lagu kali yaa?', inline: true},
            )
            .setImage('https://hackernoon.com/hn-images/1*6Da9jqVrnGsxWilCOBoejg.jpeg')
            .setFooter('kl ada yg ga bisa, yaa sudahlah ;(');

        message.channel.send(newEmbed);

    }

}