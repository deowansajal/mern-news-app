const router = require('express').Router()

const { adminControllers } = require('../controllers')

const { protect, isAdmin } = require('../middleware/auth')

router
    .route('/users/:userId')
    .all(protect, isAdmin)
    .get(adminControllers.getUser)
    .patch(adminControllers.updateUserRole)
    .delete(adminControllers.deleteUser)

router.get('/users', protect, adminControllers.getAllUsers)

module.exports = router
