const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  newReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought).delete(deleteThought).put(updateThought);

// /api/thoughts/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)

// router.route(":thoughtId/reactions").post(newReaction).delete(deleteReaction);
module.exports = router;
