const auth = require('./auth')
const user = require('./user')
const tutorial = require('./tutorial')
const comment = require('./comment')

module.exports = {
    authControllers: auth,
    userControllers: user,
    tutorialControllers: tutorial,
    commentControllers: comment,
}
