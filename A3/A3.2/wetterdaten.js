const express = require('express');
const request = require('request');
const app = express();
const port = 3000;

app.get("/home/:plz", (req, res) => {
    const params = req.params;
    console.log(params);
    const plz = params.plz;
    console.log(plz);
    res.send("Params: " + JSON.stringify(params) + " PLZ: " + plz);
});

// Route für die Temperaturabfrage
app.get('/api/:plz', (req, res) => {
    const plz = req.params.plz;
    const apiUrl = `https://app-prod-ws.meteoswiss-app.ch/v1/plzDetail?plz=${plz}00`;

    request.get({
        url: apiUrl,
        json: true,
        headers: {'User-Agent': 'request'}
    }, (err, response, data) => {
        if (err) {
            console.log('Error:', err);
        } else if (response.statusCode !== 200) {
            console.log('Status:', response.statusCode);
        } else {
            res.send(data);
        }
    });
});

// Route für die Startseite
app.get('/', (req, res) => {
    res.send('Willkommen! Verwenden Sie /<plz> um die Temperatur abzurufen.');
});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});
