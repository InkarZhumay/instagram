const { DataTypes } = require('sequelize');
const sequelize = require('../../../config/db');

const posts = require('./posts')
// const stories = require('../stories/stories')


const likes = sequelize.define('likes', {
    // user_id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // post_id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    // stories_id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
},{
  timestamps: false // Отключение автоматического создания полей createdAt и updatedAt
}
);

likes.belongsTo(posts, { foreignKey: 'post_id'});
// likes.belongsTo(stories, {foreignKey: 'stories_id'});

module.exports = likes;