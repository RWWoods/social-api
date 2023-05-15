const usernames = [
  'prettypony99',
  'dynamicduo121',
  'electricboogaloo',
  'contentkittens',
  'ihaterainbowroad',
  'zeldafan101',
  'zagreusisthebest',
  'toxiclolplayer',
  'violavoila11',
  'upintheclouds',
  'randomusername',
  'luckynumber7'
];

const thoughtDescriptions = [
  'Wow what a thought',
  'imagine thinking',
  'my last thought',
  'I love thoughts',
  'Groupthought is goodthought',
  'random thought',
  'new thought',
  'WILD thought',
  'Darn Social Media App',
  'what next?',
  'even MORE THOUGHTS',
  'seed data, reporting in',
  'lucky thought',
  'one thought',
  'two thought',
  'red thought',
  'blue thought',
];

const emails = [
  'test@test.com',
  'notascam@scam.com',
  ''
]
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = () =>
  `${getRandomArrItem(usernames)}`;

const getRandomThoughts = (int) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      thoughtText: getRandomArrItem(thoughtDescriptions),
      username: getRandomArrItem(usernames),
    });
  }
  return results;
};

// Export the functions for use in seed.js
module.exports = { getRandomUsername, getRandomThoughts };