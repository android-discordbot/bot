const weather = require("weather-js");

module.exports = {
  name: "weather",
  description: "sends a weather forecast",
  execute(client, message, args, cmd, Discord) {
    try {
      weather.find({ search: args.join(" "), degreeType: "C" }, (error, result) => {
        // 'C' can be changed to 'F' for fahrenheit results
        if (error) return message.channel.send(error);
        if (!args.join(" ")) return message.channel.send("Please specify a location");
  
        if (result === undefined || result.length === 0) {
          return message.channel.send("**Invalid** location");
        }
  
        const current = result[0].current;
        const location = result[0].location;
  
        const weatherinfo = new Discord.MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`Weather forecast for ${current.observationpoint}`)
          .setThumbnail(current.imageUrl)
          .setColor("#111111")
          .addField("Timezone", `UTC${location.timezone}`, true)
          .addField("Degree Type", "Celsius", true)
          .addField("Temperature", `${current.temperature}°`, true)
          .addField("Wind", current.winddisplay, true)
          .addField("Feels like", `${current.feelslike}°`, true)
          .addField("Humidity", `${current.humidity}%`, true);
        
        if (message == "") {
          return message.channel.send("**Oops there's an error.** 😭");
        }

        message.channel.send(weatherinfo);
      });
    } catch (error) {
      console.error(error);
      return message.channel.send("**Oops there's an error.** 😭");
    }
  },
};
