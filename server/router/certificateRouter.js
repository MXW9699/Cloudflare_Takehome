const express = require('express');
const router = express.Router();

const certificateController = require('../controllers/certificateController.js');

//creating a certificate
router.post('/:user_id', certificateController.createCertificate, (req, res) =>
  res.status(201).send('done')
);

//activating a certificate
router.put('/Active', (req, res) => res.status(200).send('done'));

//deactivating a certificate
router.put('/Deactive', (req, res) => res.status(200).json());

//delete a certificate
router.delete('Delete', (req, res) => res.status(200).json());

module.exports = router;
