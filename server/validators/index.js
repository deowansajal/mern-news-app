const auth = require('./auth')
const user = require('./user')
const tutorial = require('./tutorial')
const comment = require('./comment')

module.exports = {
    authValidators: auth,
    tutorialValidators: tutorial,
    commentValidators: comment,
    userValidators: user,
}
