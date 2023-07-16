const express = require('express')
const router = express.Router();
const {getStoriesType} = require('./controller')
const {createStories, deleteStories, getStories } = require('./controller')
const passport = require('passport')
const {validateStories, isAuthorOfStories} = require('./middleware')

router.post('/api/stories', passport.authenticate( 'jwt', {session:false}), validateStories, createStories)
router.delete('/api/stories/:id', passport.authenticate( 'jwt', {session:false}), isAuthorOfStories, deleteStories)
router.get('/api/stories/:id', passport.authenticate( 'jwt', {session:false}), getStories)

module.exports = router;