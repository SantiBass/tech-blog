const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------sequelize');
  await seedUsers();
  console.log('--------------seedUser');

  await seedPosts();
  console.log('--------------seedPost');

  await seedComments();
  console.log('-------------- seedComments');

  

  process.exit(0);
};

seedAll();
