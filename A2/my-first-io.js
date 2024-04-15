const fs = require('fs');

const filePath = process.argv[2];

const fileContent = fs.readFileSync(filePath);

const contentString = fileContent.toString();

const numberOfLines = contentString.split('\n').length - 1;

console.log(numberOfLines);
