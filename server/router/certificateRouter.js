const express = require('express');
const router = express.Router();

//get list of User's Active Certificates
router.get('/:UserID/Active', (req, res) => res.status(200).json());

//creating a certificate
router.post('/', (req, res) => res.status(200).json());

//activating a certificate
router.put('/Active', (req, res) => res.status(200).json());

//deactivating a certificate
router.put('/Deactive', (req, res) => res.status(200).json());

//delete a certificate
router.delete('Delete', (req, res) => res.status(200).json());

module.exports = router;
