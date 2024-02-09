const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//create a user -> send back user data
router.post(
  '/',
  userController.verifyEmail,
  userController.createUser,
  (req, res) => res.status(201).json(res.locals.data._id)
);

//login
router.post(
  '/login',
  userController.verifyEmail,
  userController.login,
  (req, res) => {
    if (res.locals.login) res.status(200).json({ data: true });
    else res.status(400).json({ data: false });
  }
);

module.exports = router;
