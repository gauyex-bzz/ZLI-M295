const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

// Public endpoint
app.get('/public', (req, res) => {
    res.send('Öffentlicher Inhalt.');
});

// Basic Auth middleware
const authMiddleware = basicAuth({
    users: { 'zli': 'zli1234' },
    unauthorizedResponse: 'Zugriff verweigert: geben Sie Benutzername und Passwort ein.'
});

// Private endpoint
app.get('/private', authMiddleware, (req, res) => {
    res.send('Privater Inhalt, authentifiziert!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server läuft auf Port ${port}`));
