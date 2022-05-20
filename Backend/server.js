require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT || 5050;

const chats = require('./data')

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.get('/api/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    console.log(req)
})

app.listen(PORT, console.log(`Listening to Port ${PORT}`))

