const router = require('express').Router({ mergeParams: true })

const replyRoutes = require('./reply')
const { commentControllers } = require('../controllers')

const { protect } = require('../middleware/auth')

router
    .route('/')
    .get(commentControllers.getAllComments)
    .all(protect)
    .post(commentControllers.createComment)

router.use('/:commentId/replies', replyRoutes)

module.exports = router
