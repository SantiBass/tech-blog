const path =  require('path');
const express = require('express');
const session =  require('express-session');
const routes =  require('./controllers');
const sequelize =  require('./config/connection');


module.exports = sequelize;