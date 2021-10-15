const Discord = require('discord.js');
require('dotenv').config();
const { resolveSoa } = require('dns');
const fs = require('fs');
const memberCounter = require('./counters/member-counter');
const { Recoverable } = require('repl');

const prefix = '#';

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
client.on('guildMemberAdd', async guildMember => {
    let welcomeChannel = guildMember.guild.channels.cache.get('817394884516118599'); 
    let welcomeChannel2 = guildMember.guild.channels.cache.get('777889342701568000'); 
    
    if (!welcomeChannel) {
        welcomeChannel2.send(`${guildMember} welcome to ssta 🙋‍♂️`);
    } else if (!welcomeChannel2) {
        welcomeChannel.send(`${guildMember} oy tot, welkom to de cleb yo!!`);
    } else {
        return;
    }
});

// !bye 
client.on("guildMemberRemove", (member) => {
    let byeChannel = member.guild.channels.cache.get('817394884516118599'); 
    let byeChannel2 = member.guild.channels.cache.get('786207984040149002'); 

    if (!byeChannel) {
        byeChannel2.send(`**${member}** baru aja keluar dari server.. Bye Bye Panteq 👋`);
    } else if (!byeChannel2) {
        byeChannel.send(`**${member}** baru aja keluar dari server.. anda tidak bisa jadi sang master 👋`);
    } else {
        return;
    }

})

// !distube
const DisTube = require('distube');
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => {
        const { MessageEmbed } = require('discord.js');
        const playingEmbed = new MessageEmbed()
            .setAuthor('🎵 Now Playing 🎵')
            .setTitle(`${song.name}`)
            .setURL(`${song.url}`)
            .setDescription(`${song.formattedDuration}`)
            .setColor("#7FFF00")
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playingEmbed);
    })

    .on("addSong", (message, queue, song) => message.channel.send(
        `Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue`
    ))

    .on("playList", (message, queue, playlist, song) => {
        const { MessageEmbed } = require('discord.js');
        const playlistEmbed = new MessageEmbed()
            .setAuthor('Aded Playlist')
            .setTitle(`${playlist.name}`)
            .setDescription(`There are ${playlist.songs.length} songs`)
            .setTimestamp()
            .setFooter(`Requested by: ${song.user.username}`)
        message.channel.send(playlistEmbed);
        message.channel.send(`🎵 Now playing ${song.name} - \`${song.formattedDuration}\`\n`)
    })

    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n`
    ))
    .on("error", (message, err) => message.channel.send(
        "An error encountered: " + err
    ))
    .on("empty", message => message.channel.send("Channel is empty (⊙_⊙;) Leaving.."))
// !end distube

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
        message.channel.send(error);
	}
});
