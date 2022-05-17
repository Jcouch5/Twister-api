const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

router
  .route('/')
  .get(getThoughts)
  .post(createThought)
  .put(updateThought)
  .delete(deleteThought);

router.route('/:thoughtId').get(getSingleThought);

router.route(':thoughtId/reactions').post(addReaction).delete(removeReaction);

module.exports = router;
