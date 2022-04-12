module.exports = {
    name: 'stats',
    aliases: ["status"],
    description: "add or change the stats of the bot",
    execute(client, message, args, cmd, Discord) {

        const prefix = process.env.PREFIX;

        // here you tell the bot to choose the kind of activity
        if (args[0] === "playing") {
            types = 0;
        } else if (args[0] === "streaming") {
            types = 1;
        } else if (args[0] === "listening") {
            types = 2;
        } else if (args[0] === "watching") {
            types = 3;
        } else if (args[0] === "competing") {
            types = 5;
        } else if (args[0] === "reset") {

            client.user.setPresence({
                activity: { 
                    name: `${prefix}help`,
                    type: 'WATCHING',
                },
            });

            return message.channel.send('Status changed succesfully');
            
        } else {
            return message.channel.send('Invalid activity type.');
        };

        // here you tell the bot what the activity is
        args.shift();
        content = args.join(' ');
        client.user.setPresence({
            activity: {
                name: content,
                type: types,
            },
        });

        message.channel.send('Status changed succesfully');
    },
};