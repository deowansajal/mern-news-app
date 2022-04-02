const auth = require('./auth')
const user = require('./user')
const tutorial = require('./tutorial')
const comment = require('./comment')
const reply = require('./reply')

module.exports = {
    authValidators: auth,
    tutorialValidators: tutorial,
    commentValidators: comment,
    replyValidators: reply,
    userValidators: user,
}
