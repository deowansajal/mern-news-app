const router = require('express').Router()
const commentRoutes = require('./comment')

const { tutorialControllers } = require('../controllers')
const { tutorialValidators } = require('../validators')

const { protect, isAdmin } = require('../middleware/auth')

router
    .route('/:tutorialId')
    .get(tutorialControllers.getTutorial)
    .all(protect, isAdmin)
    .put(tutorialValidators.updateTutorial, tutorialControllers.updateTutorial)
    .delete(tutorialControllers.deleteTutorial)

router
    .route('/')
    .get(tutorialControllers.getAllTutorials)
    .all(protect, isAdmin)
    .post(tutorialValidators.createTutorial, tutorialControllers.createTutorial)

router.use('/:tutorialId/comments', commentRoutes)

module.exports = router
