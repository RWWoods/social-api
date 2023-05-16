// const connection = require('../config/connection');
// const { Thought, User } = require('../models');
// const { getRandomUsername, getRandomThoughts, getRandomEmail } = require('./data');

// connection.on('error', (err) => err);

// connection.once('open', async () => {
//   console.log('connected');

//   // Drop existing Thoughts
//   // await Thought.deleteMany({});

//   // Drop existing Users
//   await User.deleteMany({});

//   // Create empty array to hold the Users
//   const Users = [];

//   // Loop 12 times -- add Users to the Users array
//   for (let i = 0; i < 12; i++) {
//     const thoughts = getRandomThoughts(4);
//     const email = getRandomEmail();
//     const userName = getRandomUsername();
//     const friends = getRandomUsername(3);

//     Users.push({
//       userName,
//       email,
//       friends,
//       thoughts,
//     });
//   }
//   const Thoughts = [];

//   // Loop 12 times -- add Users to the Users array
//   for (let i = 0; i < 12; i++) {
//     const thoughtText = getRandomThoughts();
//     const email = getRandomEmail();
//     const username = getRandomUsername();


//     Thoughts.push({
//       thoughtText,
//       email,
//       username,
//     });
//   }
//   // Add Users to the collection and await the results
//   await User.collection.insertMany(Users);

//   await Thought.collection.insertMany(Thoughts);

//   // Log out the seed data to indicate what should appear in the database
//   console.table(Users);
//   console.info('Seeding complete! 🌱');
//   process.exit(0);
// });
