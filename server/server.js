const path = require('path')
require('dotenv').config({ path: './config/.env' })
const express = require('express')
const morgan = require('morgan')

const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')
const routes = require('./routes')

// Init app
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(express.static('public'))

console.log({ path: path.join(__dirname, 'public') })
// Port
const port = process.env.PORT || 4000

//Routes
routes(app)

// Error middleware
app.use(errorHandler)

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`App listening on port ${port}`)
    })
})
