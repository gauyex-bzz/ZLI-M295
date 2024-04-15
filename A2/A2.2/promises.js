const fs = require('node:fs');

function leseDateiInhalt(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

leseDateiInhalt('textfile.txt')
    .then(inhalt => {
        console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
    })
    .catch(err => {
        console.error('Fehler beim Lesen der Datei:', err);
    });
