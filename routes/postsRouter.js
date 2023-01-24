const postsRouter = require('express').Router()
const Posts = require('../models/posts')


postsRouter.get('/posts', (req, res) => {
    Posts
    .find()
    .populate('userName', 'first_name')
    .then(posts => res.json(posts))
    .catch(err => res.json(err))
})

postsRouter.post('/posts', (req, res) => {
    Posts
    .create(req.body)
    .then(newPost => res.json(newPost))
    .catch(err => res.json(err))
})

module.exports = postsRouter