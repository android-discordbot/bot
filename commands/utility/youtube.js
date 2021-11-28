module.exports = {
    name: 'youtube',
    description: "this sends the youtube link with for people with a specific role!",
    execute(client, message, args, cmd, Discord) {
        if (message.member.roles.cache.has('702014991435563009')) {
            message.channel.send('https://www.youtube.com/channel/UC_MhnzBFd-YUFcToFCv8Qxw');
        } else {
            message.channel.send('yah gak bisa :( oke silahkan coba lagi ');
            message.member.roles.add('702014991435563009');
        }   
    }
}