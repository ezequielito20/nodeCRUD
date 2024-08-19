const moogoose = require('mongoose')


const bookSchema = new moogoose.Schema
({
    title: String,
    author: String,
    genre: String,
    publication_date: String
    
})

module.exports = moogoose.model('Book', bookSchema)