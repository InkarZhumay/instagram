const Post = require('./models/posts')
const comments = require('./models/comments')
const images = require('./models/images')
const likes = require('./models/likes')
const posts = require('./models/saved_posts')
const saved_posts = require('./models/saved_posts')

// const { Op } = require('sequelize');

const createPost = async(req, res) => {

    // console.log(req.body, req.user);
    const Post = await Post.create [{
        publish_date: req.body.publish_date,
        description: req.body.description,
        image_id: req.body.image_id,
        userId: req.user.id,
    }]

    if(req.body.comments && req.body.comments.length > 0){
        req.body.comments.forEach( async history => {
            await comments.create({
                postId: post.id,
                userId: user.id,
                text: history.text,
                storiesId: stories.id,
            })
        })
    }

    if(req.body.likes && req.body.likes.length > 0){
        req.body.likes.forEach( async history => {
            await likes.create({
                postId: post.id,
                userId: user.id,
                storiesId: stories.id,
            })
        })
    }

    if(req.body.images && req.body.images.length > 0){
        req.body.images.forEach( async history => {
            await images.create({
                postId: post.id,
                image: image.id,
            })
        })
    }

    if(req.body.saved_posts && req.body.saved_posts.length > 0){
        req.body.saved_posts.forEach( async history => {
            await saved_posts.create({
                postId: post.id,
                userId: user.id,
            })
        })
    }

// const getPostsType = async (req, res) => {
//     const PostsTypes = await PostsType.findAll()

    res.status(200).send(Post)
}

const getMyPosts = async (req, res) => {

    const posts = await Post.findAll({where: {userId: req.user.id}});
    res.status(200).send(posts)
}

const getPosts = async (req, res) => {

    const posts = await Post.findAll();
    res.status(200).send(posts)
}

const getPost = async (req, res) => {

    const post = await Post.findByPk(req.params.id, {
        include:[ 
            {
                model: comments,
                as: 'Comments'
            },
            {
                model: images,
                as: 'Images'
            },
            {
                model: likes,
                as: 'Likes'
            },
            {
                model: saved_posts,
                as: 'savedPosts'
            },
        ]
     
    });
    res.status(200).send(post)
}

const deletePost = async (req, res) => {
    const data = await Post.destroy({
        where: {
            id: req.params.id,
        },
    })
    console.log(data);
    res.status(200).end()
}

const editPost = async(req, res) => {
    await posts.update [{
        publish_date: req.body.publish_date,
        description: req.body.description,
        image_id: req.body.image_id,
        userId: req.user.id,
   }, 
   {
       where: {
           id: req.body.id
       }
   }]

   await comments.destroy({
       where: {
           postId: req.body.id
       }
   })

   await images.destroy({
       where: {
           postId: req.body.id
       }
   })

   await likes.destroy({
       where: {
           postId: req.body.id
       }
   })

   await saved_posts.destroy({
       where: {
           postId: req.body.id
       }
   })
       
   const post = {
       id: req.body.id
   }


   if(req.body.comments && req.body.comments.length > 0){
        req.body.comments.forEach( async history => {
            await comments.create({
                postId: post.id,
                userId: user.id,
                text: history.text,
                storiesId: stories.id,
            })
        })
    }

    if(req.body.likes && req.body.likes.length > 0){
        req.body.likes.forEach( async history => {
            await likes.create({
                postId: post.id,
                userId: user.id,
                storiesId: stories.id,
            })
        })
    }

    if(req.body.images && req.body.images.length > 0){
        req.body.images.forEach( async history => {
            await images.create({
                postId: post.id,
                image: image.id,
            })
        })
    }

    if(req.body.saved_posts && req.body.saved_posts.length > 0){
        req.body.saved_posts.forEach( async history => {
            await saved_posts.create({
                postId: post.id,
                userId: user.id,
            })
        })
    }
       res.status(200).end()
}

module.exports = {
    createPost,
    getMyPosts,
    getPosts,
    getPost,
    deletePost,
    editPost
}