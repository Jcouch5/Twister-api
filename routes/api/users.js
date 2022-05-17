const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  deleteFriend,
  addFriend,
} = require('../../controllers/userController');

router
  .route('/')
  .get(getUsers)
  .post(createUser)
  .put(updateUser)
  .delete(deleteUser);

router.route('/:userId').get(getSingleUser);

router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);
module.exports = router;
