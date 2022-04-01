const router = require('express').Router()

const { tutorialControllers } = require('../controllers')

const { protect, isAdmin } = require('../middleware/auth')

router
    .route('/:tutorialId')
    .get(tutorialControllers.getTutorial)
    .all(protect, isAdmin)
    .put(tutorialControllers.updateTutorial)
    .delete(tutorialControllers.deleteTutorial)

router
    .route('/')
    .get(tutorialControllers.getAllTutorials)
    .all(protect, isAdmin)
    .post(tutorialControllers.createTutorial)

// router.get('/', tutorialControllers.getAllTutorials)

module.exports = router
