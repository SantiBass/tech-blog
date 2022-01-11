const seedUsers = require('./user-seed');
const seedPosts = require('./post-seed');
const seedComments = require('./comment-seed');


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
