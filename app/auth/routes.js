const express = require('express')
const router = express.Router();
const {verifyCode} = require('./controllers')

router.post('/api/auth/verifycode', verifyCode)

module.exports = router;