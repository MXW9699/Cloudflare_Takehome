const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

//create a user -> send back user_id
router.post(
  '/',
  userController.verifyEmail,
  userController.createUser,
  (req, res) => res.status(201).json({ user_ID: res.locals.data._id })
);

//login
router.post(
  '/login',
  userController.verifyEmail,
  userController.checkPassword,
  (req, res) => {
    res.status(200).json({ user_ID: res.locals.data._id });
  }
);

//get active certificates
router.get(
  '/:user_id/certificates',
  userController.getUser,
  userController.getActive,
  (req, res) => {
    res.status(200).json({ certificates: res.locals.queryCertificates });
  }
);

router.get('/:user_id', userController.getUser, (req, res) => {
  res.status(200).json(res.locals.data);
});

router.delete('/:user_id', userController.deleteUser, (req, res) => {
  res.status(200).send('user successfully deleted');
});

module.exports = router;
