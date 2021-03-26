module.exports = {
    name: 'hey',
    description: "say hai command!",
    execute(message, args){
        
        const user = message.author;

	    return message.channel.send(`${user} sup yo e megi!`);
        
    }
}