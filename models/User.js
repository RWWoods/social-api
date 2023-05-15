const thoughtSchema = require('./Thought')
const { Schema, model } = require('mongoose');


const userSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      max_length: 50,
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: "thought"
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: "user"
    }]
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;