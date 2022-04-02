const auth = require('./auth')
const user = require('./user')
const tutorial = require('./tutorial')
const comment = require('./comment')
const reply = require('./reply')

module.exports = {
    authControllers: auth,
    userControllers: user,
    tutorialControllers: tutorial,
    commentControllers: comment,
    replyControllers: reply,
}
