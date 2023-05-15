const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (date) => {
          return new Date(date).toLocaleDateString()
        }
      },
    username: {
      type: String,
      required: true,
    },
    // reactions: [reactionSchema],
  },

);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.length}`
  })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
