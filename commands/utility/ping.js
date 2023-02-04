module.exports = {
  name: "ping",
  description: "this is a ping command",
  execute(client, message, args, cmd, Discord) {
    message.channel.send(`🤖 ${Math.round(client.ws.ping)}ms`);
  },
};
