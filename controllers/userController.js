const { ObjectId } = require('mongoose').Types;
const { User, Thought } = require('../models');

module.exports = {

  async getUsers(req, res) {
    try {
      const response = await User.find({})
      res.status(200).json(response)
    } catch (err) {
      res.status(500).json({ message: err })
    }
  },
  async getSingleUser(req, res) {
    try {
      const response = await User.findOne({ _id: req.params.userId })
        .select('-__v')
        .populate("thoughts")
        .populate("friends")

      if (!response) {
        res.status(404).json({ message: "No user found with that Id" })
      } else {
        res.json(response)
      }

    } catch (err) {
      res.status(500).json({ message: err });
    }
  },

  async createUser(req, res) {
    try {
      const response = await User.create(req.body)
      res.json(response)
    }
    catch (err) {
      res.status(500).json({ message: err });
    }
  },

  // update single user

  // delete single user

  //post / delete friend

}
