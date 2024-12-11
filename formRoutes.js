const express = require('express');
const router = express.Router();
const { createForm, getFormById, submitFormResponses } = require('../controllers/formController');
router.post('/create',createForm);
router.get('/:id',getFormById);
router.post('/:id/submit',submitFormResponse);
module.exports = router;
