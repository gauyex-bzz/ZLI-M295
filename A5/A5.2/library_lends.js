const express = require('express');
const app = express();
app.use(express.json());
const port = 3000;

let books = [
    {
        isbn: '978-3-86680-192-9',
        title: 'Harry Potter and the Philosopher\'s Stone',
        year: 1997,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-3-86680-193-6',
        title: 'Harry Potter and the Chamber of Secrets',
        year: 1998,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-3-86680-194-3',
        title: 'Harry Potter and the Prisoner of Azkaban',
        year: 1999,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-3-86680-195-0',
        title: 'Harry Potter and the Goblet of Fire',
        year: 2000,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-3-86680-196-7',
        title: 'Harry Potter and the Order of the Phoenix',
        year: 2003,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-3-86680-197-4',
        title: 'Harry Potter and the Half-Blood Prince',
        year: 2005,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-3-86680-198-1',
        title: 'Harry Potter and the Deathly Hallows',
        year: 2007,
        author: 'J.K. Rowling'
    },
    {
        isbn: '978-1-58617-048-0',
        title: 'The Hobbit',
        year: 1937,
        author: 'J.R.R. Tolkien'
    },
    {
        isbn: '978-3-86680-199-1',
        title: '1984',
        year: 1949,
        author: 'George Orwell'
    }
];

const lends = []

app.get('/books', (req, res) => {
    res.send(books)
})

app.get('/lends', (req, res) => {
    res.send(lends)
})

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});