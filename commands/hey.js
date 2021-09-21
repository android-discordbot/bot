module.exports = {
    name: 'hey',
    description: "say hai command!",
    execute(message, args) {
	    return message.channel.send(`${message.author} sup yo e megi!`);
    }
}