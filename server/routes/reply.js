const router = require('express').Router({ mergeParams: true })

const { replyControllers } = require('../controllers')
const { replyValidators } = require('../validators')

const { protect } = require('../middleware/auth')

router
    .route('/')
    .get(replyControllers.getAllReplies)
    .all(protect)
    .post(replyValidators.createReply, replyControllers.createReply)

module.exports = router
