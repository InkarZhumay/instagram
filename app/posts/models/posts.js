const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');
const User = require('../../auth/User')

const posts = sequelize.define('posts', {
    publish_date: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    image_id: {
        type: DataTypes.STRING,
        allowNull: true,
    }

},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

posts.belongsTo(User, {foreignKey: 'user_id'});

module.exports = posts;