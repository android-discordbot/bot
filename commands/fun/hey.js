module.exports = {
    name: 'hey',
    description: "say hai command!",
    execute(client, message, args, cmd, Discord) {
	    return message.channel.send(`${message.author} sup yo e megi!`);
    },
};