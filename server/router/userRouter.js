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
    res.status(200).json(res.locals.login);
  }
);

//get active certificates
router.get(
  '/:user_id/active',
  userController.getUser,
  userController.getActive,
  (req, res) => {
    res.status(200).json({ certificates: res.locals.data.certificates });
  }
);

router.delete('/:user_id', userController.deleteUser, (req, res) => {
  res.status(200).send('user successfully deleted');
});

module.exports = router;
