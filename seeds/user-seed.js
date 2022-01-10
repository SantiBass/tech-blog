const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'alesmonde1233',
    password: 'password1'
  },
 
  {
    username: 'alesmonde1222',
    password: 'password12'
  },
 
  {
    username: 'alesmonde1112',
    password: 'password123'
  },
 
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
