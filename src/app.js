const express = require('express')
const moogoose = require('mongoose')
const bodyParser = require('body-parser')
const { config } = require('dotenv')

config()

const bookRoutes =  require('./routes/book.routes')
const { default: mongoose } = require('mongoose')

// se usa express para los middlewares
const app = express()
app.use(bodyParser.json()) // parseador de bodies

// conexxion a la base de datos
moogoose.connect(process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
const db = mongoose.connection

app.use('/books', bookRoutes)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(port);
    
})    