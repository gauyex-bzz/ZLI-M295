const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/now', (req, res) => {
  const currentTime = new Date().toLocaleTimeString();
  res.send(`Aktuelle Zeit: ${currentTime}`);
});

app.get('/zli', (req, res) => {
  res.redirect('https://www.zli.ch');
});

const names = ['Max', 'Emma', 'Liam', 'Sophia', 'Noah', 'Olivia', 'Ethan', 'Ava', 'William', 'Isabella', 'James', 'Mia', 'Benjamin', 'Charlotte', 'Mason', 'Amelia', 'Michael', 'Harper', 'Alexander', 'Evelyn'];

app.get('/name', (req, res) => {
  const randomName = names[Math.floor(Math.random() * names.length)];
  res.send(`${randomName}`);
});

app.get('/html', (req, res) => {
  const htmlFilePath = path.join(__dirname, 'static', 'index.html');
  const htmlContent = fs.readFileSync(htmlFilePath, 'utf8');
  res.type('text/html').send(htmlContent);
});

app.get('/image', (req, res) => {
  const imagePath = path.join(__dirname, 'static', 'image.jpg');
  res.sendFile(imagePath);
});

app.get('/teapot', (req, res) => {
  res.status(418).send("I'm a teapot");
});

app.get('/user-agent', (req, res) => {
  const userAgent = req.headers['user-agent'];
  res.send(`Browser: ${userAgent}`);
});

app.get('/secret', (req, res) => {
  res.status(403).send('Forbidden');
});

app.get('/xml', (req, res) => {
  const xmlFilePath = path.join(__dirname, 'static', 'data.xml');
  const xmlContent = fs.readFileSync(xmlFilePath, 'utf8');
  res.type('text/xml').send(xmlContent);
});

app.get('/me', (req, res) => {
  const me = {
    Vorname: 'Sebastian',
    Nachname: 'Rüdiger',
    Alter: 69,
    Wohnort: 'Ausserbühl',
    Augenfarbe: 'Violett'
  };
  res.json(me);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
