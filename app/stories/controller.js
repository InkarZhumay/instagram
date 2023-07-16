const Stories = require('./stories')
const comments = require('../posts/models/comments')
const images = require('../posts/models/images')
const likes = require('../posts/models/likes')

const createStories = async (req, res) => {
    const Stories = await Stories.create[{
        video: req.body.video,
        date_of_expire: req.body.date_of_expire,
        userId: req.user.id,
    }]

    res.status(200).send(Stories);
}

const deleteStories = async (req, res) => {
    const data = await Stories.destroy({
        where: {
            id: req.params.id,
        },
    })
    console.log(data);
    res.status(200).end()
}

const getStories = async (req, res) => {

    const stories = await Stories.findAll({where: {userId: req.user.id}});
    res.status(200).send(stories)
}

module.exports = {
    createStories,
    deleteStories,
    getStories
}