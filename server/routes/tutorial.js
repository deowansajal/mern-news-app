const router = require('express').Router()
const commentRoutes = require('./comment')

const { tutorialControllers } = require('../controllers')
const { tutorialValidators } = require('../validators')

const { protect, isAdmin } = require('../middleware/auth')

const upload = require('../middleware/upload')

router
    .route('/:tutorialId')
    .get(tutorialControllers.getTutorial)
    .all(protect, isAdmin)
    .put(
        upload().single('tutorialImage'),
        tutorialValidators.updateTutorial,
        tutorialControllers.updateTutorial
    )
    .delete(tutorialControllers.deleteTutorial)

router
    .route('/')
    .get(tutorialControllers.getAllTutorials)
    .all(protect, isAdmin)
    .post(
        upload().single('tutorialImage'),
        tutorialValidators.createTutorial,
        tutorialControllers.createTutorial
    )

router.use('/:tutorialId/comments', commentRoutes)

module.exports = router
