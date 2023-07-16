const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');
// const Role = require('./Role');
// const Company = require('./Company');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    // phone_number: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    //     unique: true
    // },
    // full_name: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: {
    //     isEmail: true,
    //     },
    // },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    // bio: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
    // website_link: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// User.belongsTo(Role, {foreignKey: 'roleId'});
// User.belongsTo(Company, { foreignKey: 'companyId'});

module.exports = User;