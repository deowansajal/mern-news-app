const path = require('path')
require('dotenv').config({ path: './config/.env' })
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

app.use('/public', express.static(path.resolve(__dirname, 'public')))

// Port
const port = process.env.PORT || 4000

//Routes
routes(app)

// Error middleware
app.use(errorHandler)

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client-02/dist'))
    app.get('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, 'client-02', 'dist', 'index.html'))
    })
}

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
