const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");

// register view engine
app.set("view engine", "ejs");
app.set("views", "web");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("web"));

app.get("/", (req, res) => {
    let commandBuffer = [];

    const commandFolders = fs.readdirSync("./commands");
    for (const folder of commandFolders) {
        const commandFiles = fs.readdirSync(`./commands/${folder}`).filter((file) => file.endsWith(".js"));

        for (const file of commandFiles) {
            const files = fs.readFileSync(`./commands/${folder}/${file}`);
            commandBuffer.push(files);
        }
    }

    // ?something's wrong here
    // const command = client.commands.get() || client.commands.find(a => a.aliases) || client.commands.find(n => n.name) && client.commands.find(d => d.description);
    let command  = commandBuffer.toString();
    console.log(command);

    const commands = {
        name: command.name,
        description: command.description,
        aliases: command.aliases,
    };

    res.render("home", { commands });

    // commands.find().then((result) => {
    //     res.send(result);
    // }).catch((error) => {
    //     console.log(error);
    // });
});

app.listen(port, () => console.log(`Listening http://localhost:${port}`));