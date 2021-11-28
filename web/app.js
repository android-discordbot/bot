const express = require("express");
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'web');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('web'));

app.get("/", (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Listening http://localhost:${port}`));