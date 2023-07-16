const express = require('express')
const router = express.Router();
const {createPost, getMyPosts, getPosts, getPost, deletePost, editPost } = require('./controller')
const passport = require('passport')
const {validatePost, isAuthorOfPost} = require('./middleware')


router.post('/api/posts', passport.authenticate( 'jwt', {session:false}), validatePost, createPost)
// router.get('/api/posts', getPostsType)
router.get('/api/posts', passport.authenticate( 'jwt', {session:false}), getMyPosts)
router.get('/api/posts', passport.authenticate( 'jwt', {session:false}), getPosts)
router.get('/api/posts/:id', passport.authenticate( 'jwt', {session:false}), getPost)
router.delete('/api/posts/:id', passport.authenticate( 'jwt', {session:false}), isAuthorOfPost, deletePost)
router.put('/api/posts', passport.authenticate( 'jwt', {session:false}), isAuthorOfPost, validatePost, editPost)

module.exports = router;