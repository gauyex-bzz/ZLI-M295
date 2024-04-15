const http = require('http');
const bl = require('bl');

const url = process.argv[2];

http.get(url, function(response) {
    response.pipe(bl(function(err, data) {
        if (err) {
            console.error(err);
            return;
        }

        const dataString = data.toString();
        const characterCount = dataString.length;

        console.log(characterCount);
        console.log(dataString);
    }));
});
