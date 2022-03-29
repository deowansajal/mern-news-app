const router = require('express').Router()

const { adminControllers } = require('../controllers')

const { protect } = require('../middleware/auth')

router.get('/users', protect, adminControllers.getAllUsers)

module.exports = router
