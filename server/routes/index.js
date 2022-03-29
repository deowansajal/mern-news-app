const authRoutes = require('./auth')
const adminRoutes = require('./admin')

const routesArray = [
    {
        path: '/api/v1/auth',
        route: authRoutes,
    },
    {
        path: '/api/v1/admin',
        route: adminRoutes,
    },
]

const routes = app => {
    routesArray.forEach(route => {
        app.use(route.path, route.route)
    })
}

module.exports = routes
