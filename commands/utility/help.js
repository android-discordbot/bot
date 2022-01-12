module.exports = {
    name: 'help',
    aliases: ['h'],
    description: "This sends the list of commands!",
    execute(client, message, args, cmd, Discord) {
        const prefix = process.env.PREFIX;

        if (args.join(" ") == "music") {
            const musicEmbed = new Discord.MessageEmbed()
                .setColor('#12A5F1')
                .setTitle('Music Commands')
                .setURL('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw')
                .setDescription('Ni buat yg nyari music command gw')
                .addFields(
                    {name: `\`${prefix}play\` \`${prefix}p\``, value: 'ngeplay lagu dari youtube'},
                    {name: `\`${prefix}playskip\` \`${prefix}ps\``, value: 'langsung play tanpa antrian'},
                    {name: `\`${prefix}stop\` \`${prefix}dc\` \`${prefix}st\``, value: 'buat ngusir bot'},
                    {name: `\`${prefix}queue\` \`${prefix}q\``, value: 'liat antrian'},
                    {name: `\`${prefix}skip\` \`${prefix}s\` \`${prefix}sk\``, value: 'skip skip'},
                    {name: `e \`${prefix}sf\``, value: 'mengacak ngacak antrian'},
                    {name: `\`${prefix}loop\` \`${prefix}repeat\``, value: 'looping lagu (gak bisa dimatiin)'},
                    {name: `\`${prefix}autoplay\` \`${prefix}auto\` \`${prefix}ap\``, value: 'autoplay lagu kl antrian abis'},
                    {name: `\`${prefix}pause\``, value: 'pause lagunya'},
                    {name: `\`${prefix}resume\` \`${prefix}continue\``, value: 'lanjutin lagunya'},
                    {name: `\`${prefix}seek\` \`${prefix}jump\``, value: 'loncatin lagu kali yaa?'},
                )
                .setImage('https://image.freepik.com/free-vector/musical-pentagram-sound-waves-notes-background_1017-33911.jpg')
                .setFooter('kl ada yg ga bisa, yaa sudahlah ;(');

            message.channel.send(musicEmbed);

        } else {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#12A5F1')
                .setTitle('List of Commands')
                .setURL('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw')
                .setDescription('Ni buat yg nyari bisa apa aja gw')
                .addFields(
                    {name: `${prefix}ping`, value: 'cek ping'},
                    {name: `${prefix}rules`, value: 'kirim peraturan server'},
                    {name: `${prefix}youtube`, value: 'kasih link youtube'},
                    {name: `${prefix}kick *@orangngeselin*`, value: 'parah kick!'},
                    {name: `${prefix}ban *@orangngeselin*`, value: 'ban member'},
                    {name: `${prefix}clear *2* / ${prefix}c *2*`, value: 'apus message'},
                    {name: `${prefix}mute *@orangngeselin* 4s`, value: 'mute orang sementara'},
                    {name: `${prefix}mute *@orangngeselin*`, value: 'mute Memeber'},
                    {name: `${prefix}unmute *@orangngeselin*`, value: 'unmute Memeber'},
                    {name: `${prefix}help`, value: 'list semua command'},
                    {name: `${prefix}help music`, value: 'list semua command music'},
                    {name: `${prefix}image *car* / ${prefix}i *car*`, value: 'cari gambar di google'},
                    {name: `${prefix}reactionrole`, value: 'buat pilih role (ada 3)'},
                    {name: `${prefix}gif *car*`, value: 'kirim gif dari tenor'},
                    {name: `${prefix}giphy *car* / ${prefix}gip *car*`, value: 'kirim gif dari giphy'},
                    {name: `${prefix}hey`, value: 'sapa sapa aja'},
                    {name: `${prefix}avatar / ${prefix}pp *@aku*`, value: 'liat profile pic, bisa juga kl tag orang'},
                    {name: `${prefix}weather *jakarta*`, value: 'dukun cuaca'},
                    {name: `${prefix}meme`, value: 'meme dari Reddit (kadang gak bisa karna diblokir su)'},
                    {name: `${prefix}ticket`, value: 'bikin channel private bersama admin'},
                    {name: `${prefix}invite`, value: 'invite aku ke servermu :)'},
                    {name: `${prefix}stats **playing** *bokep*`, value: `ganti status bot | ${prefix}stats reset`},
                    {name: `${prefix}gtn`, value: 'maen tebak angka'},
                    {name: `${prefix}emojify *hai*`, value: 'ubah kata menjadi emoji'},
                    )
                .setImage('https://hackernoon.com/hn-images/1*6Da9jqVrnGsxWilCOBoejg.jpeg')
                .setFooter('kl ada yg ga bisa, yaa sudahlah ;(');

            message.channel.send(newEmbed);
        };
    },
};