const { ObjectId } = require('mongoose').Types;
const {User, Thought} = require('../models');

module.exports = {

  async getUsers(req, res) {
    try {
        const response = await User.find({})
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ message: err })
    }
},
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  },

  // update single user

  // delete single user

  //post / delete friend

}
