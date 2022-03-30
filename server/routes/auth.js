const router = require('express').Router()

// const { protect } = require('../middleware/auth')

const { authControllers } = require('../controllers')

router.post('/signup', authControllers.signup)
router.post('/login', authControllers.login)
router.post('/forgot-password', authControllers.forgotPassword)

// router.put('/resetpassword/:resettoken', resetPasswordController)
// router.get('/me', protect, getMe)
// router.put('/me', profileValidator, protect, updateUserProfileController)

module.exports = router
