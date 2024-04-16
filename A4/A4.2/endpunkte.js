const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = 3000;

app.get('/now', (req, res) => {
    res.send(new Date().toLocaleTimeString('de-CH', {timeZone: req.query.tz}));
});

const namelist = [
    'Sabine',
    'Julia',
    'Franz',
    'Friedrich'
]

app.post('/names', (req, res) => {
    namelist.push(req.body.name);
    res.send(namelist)
})

app.delete('/names',  (req, res) => {
    const rm = req.query.name;
    const index = namelist.indexOf(rm);

    if (index === -1) {
        res.status(404).send("Se fucking name dos nod egsist????```;MJNBHBGZGHHBJSjdjdfgincvojenndjnvvo")
    } else {
        namelist.splice(index, 1)
        res.status(200).send(namelist);
    }
})

app.get("/names", (req, res) => {
    res.send(namelist)
})

app.get('/secret2', (req, res) =>{
    let auth = req.headers.authorization;
    if(auth === 'Basic aGFja2VyOjEyMzQ='){
        res.sendStatus(200)
    }
    else{
        res.sendStatus(401)
    }
})

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`)
})
