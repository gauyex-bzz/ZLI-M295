const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

app.get('/now', (req, res) => {
  res.send(new Date().toLocaleTimeString());
});

app.get('/zli', (req, res) => {
  res.redirect('https://www.zli.ch');
});

const names = ['Max', 'Emma', 'Liam', 'Sophia', 'Noah', 'Olivia', 'Ethan', 'Ava', 'William', 'Isabella', 'James', 'Mia', 'Benjamin', 'Charlotte', 'Mason', 'Amelia', 'Michael', 'Harper', 'Alexander', 'Evelyn'];

app.get('/name', (req, res) => {
  res.send(names[Math.floor(Math.random() * names.length)]);
});

app.get('/html', (req, res) => {
  res.type('text/html').send(fs.readFileSync('C:/Users/xavier/WebstormProjects/ZLI-M295/A3/A3.3/static/index.html', 'utf8'));
});

app.get('/image', (req, res) => {
  res.sendFile('C:/Users/xavier/WebstormProjects/ZLI-M295/A3/A3.3/static/image.jpg');
});

app.get('/teapot', (req, res) => {
  res.status(418).send("I'm a teapot");
});

app.get('/user-agent', (req, res) => {
  res.send(req.headers['user-agent']);
});

app.get('/secret', (req, res) => {
  res.status(403).send('Forbidden');
});

app.get('/xml', (req, res) => {
  res.type('text/xml').send(fs.readFileSync('C://Users/xavier//WebstormProjects//ZLI-M295//A3//A3.3//static//data.xml', 'utf8'));
});

app.get('/me', (req, res) => {
  const me = {
    Vorname: 'Sebastian',
    Nachname: 'Rüdiger',
    Alter: 32,
    Wohnort: 'Ausserbühl',
    Augenfarbe: 'Grün'
  };
  res.json(me);
});

app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
