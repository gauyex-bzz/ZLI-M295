const mymodule = require('./mymodule');

const directory = process.argv[2];
const extension = process.argv[3];

mymodule(directory, extension, function(err, files) {
    if (err) {
        console.error("An error occurred while reading the directory:", err);
        return;
    }

    files.forEach(file => console.log(file));
});
