const { DataTypes } = require('sequelize');
const sequelize = require('../../config/db');

const posts = sequelize.define('posts', {
    publish_date: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.STRING,
        allowNull: true,
    },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

// User.belongsTo(Role, {foreignKey: 'roleId'});
// User.belongsTo(Company, { foreignKey: 'companyId'});

module.exports = posts;