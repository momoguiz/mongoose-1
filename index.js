const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.urlencoded({
    extended : true
}))
const cors = require('cors')
app.use(express.json())
app.use(cors())
require('dotenv').config()

const usersRouter = require('./routes/usersRouter')
const postsRouter = require('./routes/postsRouter')


app.use('/api', usersRouter, postsRouter)

app.get('/', (req, res) => {
    res.send('Welcome to my api').status(200)
})

const mongoURI = process.env.MONGO_URI
mongoose.connect(mongoURI, {useNewUrlParser : true})

const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.listen(8000, () => {
    console.log(`Server is running on port 8000`)
})