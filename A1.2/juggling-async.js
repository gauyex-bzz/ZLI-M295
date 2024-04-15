const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
const results = [];
let count = 0;

function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results[i]);
    }
}

function httpGet(index) {
    http.get(urls[index], function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                console.error(err);
                return;
            }

            results[index] = data.toString();
            count++;

            if (count === 3) {
                printResults();
            }
        }));
    });
}

for (let i = 0; i < 3; i++) {
    httpGet(i);
}
