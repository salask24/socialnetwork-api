const router = require('express').Router();
const { getAllThoughts, 
    createThought, getThoughtById, 
    updateThought, deleteThought, 
    createReaction, deleteReaction } = require('../../controller/thought-controller');

router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction);

router
    .route('/:thoughtId/:reactionId')
    .delete(deleteReaction);

module.exports = router;