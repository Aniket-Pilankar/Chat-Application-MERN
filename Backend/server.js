require('dotenv').config()
const express = require('express');
const connectDB = require('./configs/db');

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 5050;

const chats = require('./data');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const userRoutes = require('./routes/userRoutes')

app.get('/', (req, res) => {
    res.send("Api is running")
})

app.use('/api/user', userRoutes)

// Error handling middleware
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, async () => {
    try {
        await connectDB()
        console.log(`Listening to Port ${PORT}`)
        // console.log(`MongoBD Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("Error:" + error.message);
    }
})

