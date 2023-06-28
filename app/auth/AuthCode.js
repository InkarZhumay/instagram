const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const AuthCode = sequelize.define('AuthCode', {
    code: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
  }
);

module.exports = AuthCode;