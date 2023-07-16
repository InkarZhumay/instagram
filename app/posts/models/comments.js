const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const posts = require('./posts')
// const stories = require('../stories/stories')


const comments = sequelize.define('comments', {
    text: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // user_id: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
    // post_id: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
    // stories_id: {
    //     type: DataTypes.STRING,
    //     allowNull: true,
    // },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

comments.belongsTo(posts, { foreignKey: 'post_id'});
// comments.belongsTo(stories, {foreignKey: 'stories_id'});

module.exports = comments;