const authRoutes = require('./auth')
const userRoutes = require('./user')
const tutorialRoutes = require('./tutorial')

const routesArray = [
    {
        path: '/api/v1/auth',
        route: authRoutes,
    },
    {
        path: '/api/v1/users',
        route: userRoutes,
    },

    {
        path: '/api/v1/tutorials',
        route: tutorialRoutes,
    },
]

const routes = app => {
    routesArray.forEach(route => {
        app.use(route.path, route.route)
    })
}

module.exports = routes
