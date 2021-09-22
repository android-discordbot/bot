const Discord = require('discord.js');
require('dotenv').config();
const { resolveSoa } = require('dns');
const fs = require('fs');
const memberCounter = require('./counters/member-counter');
const { Recoverable } = require('repl');

const prefix = '#';

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Android is online!');
    
    memberCounter(client);
    
});

// !welkom v1
// client.on('guildMemberAdd', guildMember => {
//     let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Gak Kenal');

//     guildMember.roles.add(welcomeRole);
//     guildMember.guild.channels.cache.get('689632454704758863').send(`YO <@${guildMember.user.id}> SUP MEGI! liat rules nya duls ok, -rules di channel commands`)
// });
    
// !welkom v2
client.on("guildMemberAdd", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '🎉•welcome' || 'ᗯeᒪkoᗰ-to-ᗪe-ᑕᒪeᗷ')
    welcomeChannel.send (`Welkom to de cleb yo ${member}`)
})

// !bye
client.on("guildMemberRemove", member => {
    const welcomeChannel = member.guild.channels.cache.find(channel => channel.name === '🎉•welcome' || 'ᗯeᒪkoᗰ-to-ᗪe-ᑕᒪeᗷ')
    welcomeChannel.send (`Selamat tinggal asyu! 👋 ${member}`)
})

// !distube
const DisTube = require('distube');
client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue by ${song.user}`
    ))
    .on("playList", (message, queue, playlist, song) => message.channel.send(
        `Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n`
    ))
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n`
    ))



client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // fun command
    if (command === 'image') {
        client.commands.get('image').execute(message, args, Discord)
    } else if (command === 'avatar') {
        client.commands.get('avatar').execute(message, args, Discord)
    } else if (command === 'weather') {
        client.commands.get('weather').execute(message, args, Discord)
    } else if (command === 'meme') {
        client.commands.get('meme').execute(message, args, Discord)
    } else if (command === 'gif') {
        client.commands.get('gif').execute(message, args, Discord);
    } else if (command === 'anime') {
        client.commands.get('anime').execute(message, args, Discord);
    } else if (command === 'sussybaka') {
        client.commands.get('sussybaka').execute(message, args, Discord, client);
        
    } else if (command === 'hey') {
        client.commands.get('hey').execute(message, args);
    } else if (command === 'ping') {
        client.commands.get('ping').execute(message, args, client);
    } else if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    }
    
    // MODS
    if (command === 'youtube') {
        client.commands.get('youtube').execute(message, args)
    } else if (command === 'invite') {
        client.commands.get('invite').execute(message, args, Discord)
    } else if (command === 'rules') {
        client.commands.get('rules').execute(message, args, Discord)
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord)
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'mute') {
        client.commands.get('mute').execute(message, args);
    } else if (command === 'unmute') {
        client.commands.get('unmute').execute(message, args);
    } else if (command === 'stats') {
        client.commands.get('stats').execute(message, args, client);
        // reactionrole
    } else if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client)
    } else if (command === 'reactionrole2') {
        client.commands.get('reactionrole2').execute(message, args, Discord, client)
    } else if (command === 'reactionrole3') {
        client.commands.get('reactionrole3').execute(message, args, Discord, client)
    }
        
    // music command
    if (["p", "play"].includes(command)) {
        client.commands.get('play').execute(message, args, client);

    } else if (["st", "dc", "stop"].includes(command)) {
        client.commands.get('stop').execute(message, args,client);

    } else if (["q", "queue"].includes(command)) {
        client.commands.get('queue').execute(message, args, client);

    } else if (["s", "skip"].includes(command)) {
        client.commands.get('skip').execute(message, args, client);

    } else if (["repeat", "loop"].includes(command)) {
        client.commands.get('loop').execute(message, args, client);
    } 

});

client.login(process.env.DISCORD_TOKEN);