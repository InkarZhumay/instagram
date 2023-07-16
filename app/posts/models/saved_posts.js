const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const User = require('../../auth/User');
const posts = require('./posts');

const saved_posts = sequelize.define('saved_posts', {
    user_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    post_id: {
        type: DataTypes.STRING,
        allowNull: true,
    }

},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

saved_posts.belongsTo(User, {foreignKey: 'user_id'});
saved_posts.belongsTo(posts, {foreignKey: 'post_id'});

module.exports = posts;