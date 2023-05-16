const { User, Thought } = require('../models');

module.exports = {

  getUsers(req, res) {
    User.find({})
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate("thoughts")
      .populate("friends")
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  // update single user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // delete single user
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: user.thoughts } })
      )
      .then(() => res.json({ message: 'User and associated thoughts are deleted!' }))
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.userId},
      {$addToSet: { friends: req.params.friendid}},
      {runValidators: true, new: true}
      )
      .then(() => res.json({ message: 'New friend added successfully' }))
      .catch((err) => res.status(500).json(err));
  },


  removeFriend(req, res) {
    User.findOneAndUpdate(
      {_id: req.params.friendId},
      {$pull: { friends: {username: req.body.friendId}}},
      {new: true}
      )
      .then(() => res.json({ message: 'friend removed successfully' }))
      .catch((err) => res.status(500).json(err));
  },
  
};

