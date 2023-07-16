const express = require('express')
const router = express.Router();
const {createUser, editUser} = require('./controller')

router.post('/api/auth/createUser', createUser)
router.post('/api/auth/editUser', editUser)

module.exports = router;