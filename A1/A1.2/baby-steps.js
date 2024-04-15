const args = process.argv;

let sum = 0;
for (let i = 2; i < args.length; i++) {
    sum += +args[i];
}

console.log(sum);
