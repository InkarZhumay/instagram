const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
const User = require('./User')
const followers = require('./followers')


const followers = sequelize.define('followers', {
    // user_id: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
    // follower_id: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

followers.belongsTo(User, {foreignKey: 'user_id'});
followers.belongsTo(User, {foreignKey: 'followers_id'});


module.exports = followers;