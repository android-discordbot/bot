require('./web/app');
const Discord = require('discord.js');
require('dotenv').config();
const { resolveSoa } = require('dns');
const fs = require('fs');
const DisTube = require('distube');
const memberCounter = require('./client/member-counter');
const welcomeMessage = require('./client/welcome-message');
const goodbyeMessage = require('./client/goodbye-message');
const distubeClient = require('./client/distube-client');
const { Recoverable } = require('repl');

const prefix = process.env.PREFIX;

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
client.commands = new Discord.Collection();

// !command handling
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.login(process.env.DISCORD_TOKEN);

client.on('ready', () => {
    console.log('Android is online!');
    
    memberCounter(client);
});

// !welkom 
welcomeMessage(client);

// !bye 
goodbyeMessage(client);

// !distube
distubeClient(client, Discord, DisTube);

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const cmd = args.shift().toLowerCase();

    // !aliasses
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

	try {
        command.execute(client, message, args, cmd, Discord);
	} catch (error) {
		console.error(error);
		message.reply('Error lah su');
	}
});
