const router = require('express').Router()

// const {
//     signupValidator,
//     loginValidator,
//     profileValidator,
// } = require('../middleware/authValidator')
// const {
//     signupController,
//     loginController,
//     confirmEmail,
//     getMe,
//     updateUserProfileController,
//     forgotPasswordController,
//     resetPasswordController,
//     deleteAllUsers,
// } = require('../controllers/authController')

// const { protect } = require('../middleware/auth')

const { authControllers } = require('../controllers')

router.post('/signup', authControllers.signup)
router.post('/login', authControllers.login)

// router.get('/confirmemail', confirmEmail)
// router.post('/login', loginValidator, loginController)
// router.post('/forgotpassword', forgotPasswordController)
// router.put('/resetpassword/:resettoken', resetPasswordController)
// router.get('/me', protect, getMe)
// router.put('/me', profileValidator, protect, updateUserProfileController)

module.exports = router
