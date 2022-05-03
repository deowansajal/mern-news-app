const path = require('path')
require('dotenv').config({ path: '.env' })
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const connectDB = require('./config/db')

const { errorHandler } = require('./middleware/errorHandler')
const routes = require('./routes')

// Init app
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))

app.use(cors())

// Port
const port = process.env.PORT || 4000

//Routes
routes(app)

// Error middleware
app.use(errorHandler)

app.use('/public', express.static(path.join(__dirname, 'public')))

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client-02/dist'))
    app.get('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, 'client-02', 'dist', 'index.html'))
    })
}

// Serve static assets if in dev
if (process.env.NODE_ENV !== 'production') {
    app.get('*', (req, res, next) => {
        res.json('I am running in dev mode')
    })
}

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
