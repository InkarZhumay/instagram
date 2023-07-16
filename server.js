const express = require('express');
const logger = require('morgan');
const passport = require('passport');
// const multer = require('multer')
// const upload = multer()
const axios = require('axios');

const app = express();

app.use(logger('dev'));
app.use(express.urlencoded());
app.use(express.json());
app.use(passport.initialize()); 

require('./app/auth/passport')

app.use(require('./app/auth/routes'))
app.use(require('./app/posts/router'))
app.use(require('./app/stories/router'))

app.get('./app/posts/models/posts', async (req, res) => {
    try {
      // логика для получения списка постов Instagram
  
      res.json(posts); // Отправка списка постов в качестве JSON-ответа
    } catch (error) {
      console.error('Error retrieving Instagram posts:', error);
      res.status(500).json({ error: 'Failed to retrieve Instagram posts' });
    }
  });

  app.get('/api/all_posts', async (req, res) => {
    try {
      const accessToken = 'YOUR_ACCESS_TOKEN'; // Замените на свой авторизационный токен
  
      const response = await axios.get(`https://api.instagram.com/v1/users/self/media/recent?access_token=${accessToken}`);
  
      const posts = response.data.data;
  
      res.json(posts);
    } catch (error) {
      console.error('Error retrieving Instagram posts:', error);
      res.status(500).json({ error: 'Failed to retrieve Instagram posts' });
    }
  });

  app.get('/api/posts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
  
      const response = await axios.get(`https://api.instagram.com/v1/media/${postId}`, {
        params: {
          access_token: 'YOUR_ACCESS_TOKEN'
        }
      });
  
      const post = response.data.data; // Полученный пост
  
      res.json(post); // Отправка поста в качестве JSON-ответа
    } catch (error) {
      console.error('Error retrieving Instagram post:', error);
      res.status(500).json({ error: 'Failed to retrieve Instagram post' });
    }
  });

  app.delete('/api/posts/:id', async (req, res) => {
    try {
      const postId = req.params.id;
  
      const response = await axios.delete(`https://api.instagram.com/v1/media/${postId}`, {
        params: {
          access_token: 'YOUR_ACCESS_TOKEN'
        }
      });
  
      res.json({ success: true }); // Отправка успешного статуса удаления в качестве JSON-ответа
    } catch (error) {
      console.error('Error deleting Instagram post:', error);
      res.status(500).json({ error: 'Failed to delete Instagram post' });
    }
  });
  


// app.use(upload.any())


// app.get('/', (req,res) => {
//     res.send("ok")
// })

// app.post('/api/:key', (req, res) =>{
//     console.log("req.body=", req.body);
//     console.log("req.headers.authorization=", req.headers.authorization);
//     console.log("req.query=", req.query);
//     console.log("req.params=", req.params);
//     res.status(200).send("POST /api works");
// })

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
