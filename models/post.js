const Sequelize = require('sequelize');
const db = require('../config/database');

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = Post;
