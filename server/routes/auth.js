const router = require('express').Router()

const { authControllers } = require('../controllers')
const { authValidators } = require('../validators')

router.post('/signup', authValidators.signup, authControllers.signup)
router.post('/login', authValidators.login, authControllers.login)
router.post('/forgotPassword', authControllers.forgotPassword)
router.put(
    '/resetPassword/:resetToken',
    authValidators.resetPassword,
    authControllers.resetPassword
)

module.exports = router
