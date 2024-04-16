const express = require('express');
const app = express();
const port = 3000;

app.get('/now', (req, res) => {
    res.send(new Date().toLocaleTimeString('de-CH', {timeZone: req.query.tz}));
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`)
})
