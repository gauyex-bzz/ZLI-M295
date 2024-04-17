const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['../../A5/A5.2/library_lends.js']

const doc = {
    info: {
        version: "1.0.0",
        title: "Library API",
        description: "Documentation for Library API"
    },
    host: "localhost:3000",
    basePath: "/",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "Book",
            "description": "Endpoints"
        },
        {
            "name": "Lend",
            "description": "Endpoints"
        }
    ],
    definitions: {
        Book: {
            isbn: "978-3-86680-192-9",
            title: "Harry Potter and the Philosopher's Stone",
            year: 1997,
            author: "J.K. Rowling"
        },
        Lend: {
            id: 1,
            customer_id: "123",
            isbn: "978-3-86680-192-9",
            borrowed_at: new Date()
        }
    }
}

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('../../A5/A5.2/library_lends')
})