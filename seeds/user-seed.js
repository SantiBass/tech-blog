const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'D',
    password: 'D'
  },
 
  {
    username: 'Todd',
    password: 'Todd'
  },
 
  {
    username: 'Steve',
    password: 'Steve'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
