const express = require('express');
const router = express.Router();

const certificateController = require('../controllers/certificateController.js');

//creating a certificate
router.post('/:user_id', certificateController.createCertificate, (req, res) =>
  res.status(201).json({certificate: res.locals.data})
);

//activating/deactivating a certificate
router.put('/:cert_id/state', certificateController.changeState, (req, res) => res.status(200).json(res.locals.data));

//delete a certificate
router.delete('/:cert_id', certificateController.deleteCertificate, (req, res) => res.status(200).json());

module.exports = router;
