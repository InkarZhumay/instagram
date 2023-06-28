const express = require('express');
const logger = require('morgan');
// const multer = require('multer')
// const upload = multer()
const app = express();

app.use(logger('dev'));
app.use(express.urlencoded());
app.use(express.json());

app.use(require('./app/auth/routes'))

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
