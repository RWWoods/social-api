const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Drop existing Thoughts
  await Thought.deleteMany({});

  // Drop existing Users
  await User.deleteMany({});

  // Create empty array to hold the Users
  const Users = [];

  // Loop 20 times -- add Users to the Users array
  for (let i = 0; i < 12; i++) {
    const thoughts = getRandomThoughts(10);
    const email = getRandomEmail(10)
    const userName = getRandomUsername();

    Users.push({
      userName,
      email,
      friends,
      thoughts,
    });
  }

  // Add Users to the collection and await the results
  await User.collection.insertMany(Users);

  // Add Thoughts to the collection and await the results
  await Thought.collection.insertOne({
    ThoughtName: 'UCLA',
    inPerson: false,
    Users: [...Users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(Users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});
