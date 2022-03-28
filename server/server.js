require('dotenv').config({ path: './config/.env' })

const express = require('express')
const connectDB = require('./config/db')
const User = require('./models/User')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Port
const port = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.json({ message: 'Hello world' })
})

app.get('/signup', (req, res) => {
    User.create({
        name: 'sajal',
        email: 'test@tester.com',
        password: 'pass123',
    })
        .then(user => {
            console.log(user)
            res.json({ message: 'Hello world', user: user })
        })
        .catch(err => {
            console.log(err)
        })
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
