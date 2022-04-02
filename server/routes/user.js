const router = require('express').Router()

const { userControllers } = require('../controllers')
const { userValidators } = require('../validators')

const { protect, isAdmin } = require('../middleware/auth')

router.get('/me', protect, userControllers.getMe)
router
    .route('/:userId')
    .get(protect, userControllers.getUser)
    .all(protect, isAdmin)
    .patch(userValidators.updateUserRole, userControllers.updateUserRole)
    .delete(userControllers.deleteUser)

router.get('/', protect, isAdmin, userControllers.getAllUsers)

module.exports = router
