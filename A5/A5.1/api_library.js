const express = require('express');
const {response} = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const books = [
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
        isbn: '1234',
        title: '1984',
        year: 1949,
        author: 'George Orwell'
    }
];

app.get('/books', (req, res) => {
    const isbn = req.query.isbn;
    const title = req.query.title;

    let filteredBooks = books

    if (isbn) {
        filteredBooks = filteredBooks.filter(book => book.isbn === isbn);
    }
    if (title) {
        filteredBooks = filteredBooks.filter(book => book.title === title);
    }
        if (filteredBooks.length > 0) {
            res.send(filteredBooks);
        }
        else {
            res.status(404).send(`Buch nicht gefunden`);
        }
})

app.post('/books', (req, res) => {
    const newbook = {
        isbn: req.body.isbn,
        title: req.body.title,
        year: req.body.year,
        author: req.body.author
    }
    if (isNaN(newbook.year)) {
        res.status(400).send('Jahr muss eine Zahl sein');
    } else {
        books.push(newbook);
        res.send(books);
    }
});

app.put('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn
    const newbook = req.body;

    const bookindex = books.findIndex(book => book.isbn === isbn);

    if (bookindex === -1) {
        res.status(404).send('Buch nicht gefunden');
    } else {
        books[bookindex] = {
            isbn: isbn,
            title: newbook.title,
            year: newbook.year,
            author: newbook.author
        };
        res.send(books);
    }
});

app.delete('/books/:isbn', (req, res) => {
    const isbn = req.params.isbn

    const bookindex = books.findIndex(book => book.isbn === isbn);

    if (bookindex === -1) {
        res.status(404).send('Buch nicht gefunden');
    } else {
        books.splice(bookindex, 1);
        }
        res.send(books);

});

app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});