module.exports = {
    name: 'clear',
    aliases: ['c', 'cl'],
    description: "clear messages",
    async execute(client, message, args, cmd, Discord) {
        if (!args[0]) return message.reply("You need to put how many message to clear!");
        if (isNaN(args[0])) return message.reply("Only the number please!");

        if (args[0] > 100) return message.reply("No more than 100 messages!");
        if (args[0] < 1) return message.reply("Don't put 0 you dumb!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    },
};