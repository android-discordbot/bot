module.exports = {
    name: 'leave',
    description: 'stop the bot and leave the channel',
    async execute(message, args) {
        const voiceChannel = message.member.voice.channel;
 
        if(!voiceChannel) return message.channel.send("Harus ada di voice channel baru bisa stop stop music orang!");
        await voiceChannel.leave();
        
        await message.channel.send('Leaving channel :smiling_face_with_tear:')
 
    }
}