const express = require('express');
const session = require('express-session');

const app = express();

app.use(express.json());
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

app.post('/name', (req, res) => {
    req.session.name = req.body.name;
    res.send('Name gespeichert.');
});

app.get('/name', (req, res) => {
    res.send(`Gespeicherter Name: ${req.session.name}`);
});

app.delete('/name', (req, res) => {
    req.session.destroy();
    res.send('Name entfernt.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server läuft auf Port  ${port}`));
