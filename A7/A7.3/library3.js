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

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    if (email === 'yourmail@gmail.com' && password === 'password') {
        req.session.authenticated = true;
        req.session.email = email;
        res.status(201).send('Authentifiziert');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.get('/verify', (req, res) => {
    if (req.session.authenticated) {
        res.status(200).send('Verifiziert');
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.delete('/logout', (req, res) => {
    req.session.destroy();
    res.status(204).send('Ausgeloggt.');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server läuft auf Port ${port}`));