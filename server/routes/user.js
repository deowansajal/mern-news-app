const router = require('express').Router()

const { userControllers } = require('../controllers')

const { protect, isAdmin } = require('../middleware/auth')

router
    .route('/:userId')
    .get(userControllers.getUser)
    .all(protect, isAdmin)
    .patch(userControllers.updateUserRole)
    .delete(userControllers.deleteUser)

router.get('/', protect, userControllers.getAllUsers)

module.exports = router
