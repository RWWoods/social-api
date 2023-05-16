const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser).put(updateUser).delete(deleteUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser)


// /api/users/:userId/friends
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/thoughts/:thoughtId
router.route('/:userId/friends/:friendId').delete(removeFriend).post(addFriend);

module.exports = router;
