module.exports = {
    name: 'clear',
    aliases: ['c', 'cl'],
    description: "Clear messages!",
    async execute(client, message, args, cmd, Discord) {
        if(!args[0]) return message.reply("kurang lengkap bos cek lagi ok!");
        if(isNaN(args[0])) return message.reply("kasih angka woy!");

        if(args[0] > 100)return message.reply("gak bisa lebih dari 100 message tot!");
        if(args[0] < 1)return message.reply("ya jangan 0 juga dong!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        });
    }
}