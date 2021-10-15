module.exports = async (client) => {
    const guild = client.guilds.cache.get('689632454704758863');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('817987179829395496');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 100000);
}

