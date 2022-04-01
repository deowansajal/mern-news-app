const auth = require('./auth')
const user = require('./user')
const tutorial = require('./tutorial')

module.exports = {
    authControllers: auth,
    userControllers: user,
    tutorialControllers: tutorial,
}
