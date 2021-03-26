module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args, client) {
        message.channel.send(`:robot: ${Math.round(client.ws.ping)}ms`);
    }
}