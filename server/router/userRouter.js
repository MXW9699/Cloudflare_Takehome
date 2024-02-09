const express = require('express');
const router = express.Router();

//create a user
router.post('/', (req, res) => res.status(201).json());

//login
router.post('/login', (req, res) => res.status(201).json());

module.exports = router;
