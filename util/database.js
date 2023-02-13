const Sequelize = require('sequelize');

const sequelize = new Sequelize('nodeall', 'root', 'Akash@8958', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;