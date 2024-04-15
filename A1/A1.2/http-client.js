const http = require('http');

const url = process.argv[2];

http.get(url, function(response) {
    response.setEncoding('utf8');

    response.on('data', function(data) {
        // Print the data to the console, each chunk on a new line
        console.log(data);
    });

    response.on('error', function(err) {
        console.error("Error:", err);
    });
});
