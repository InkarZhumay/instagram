const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../../config/db');


const stories = sequelize.define('stories', {
    video: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    date_of_expire: {
        type: DataTypes.DATE,
        allowNull: true,
    },

},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// stories.belongsTo(User, {foreignKey: 'user_id'});

module.exports = stories;