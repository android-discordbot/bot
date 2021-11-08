const express = require("express");
const app = express();
const port = 3000;

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'web');

app.get("/", (req, res) => {
    res.render('home');
});

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));