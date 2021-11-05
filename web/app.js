const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send(`<h1>Hello World!</h1> \n <p>This is a webserver for the discord bot</p>`));

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));