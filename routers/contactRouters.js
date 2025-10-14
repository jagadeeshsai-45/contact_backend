const express = require('express');

const router = express.Router();

const {getContacts, 
       createContact,
       updateContact,
       deleteContact,
       getContact} = require('../controllers/contactController');

const validateHandlerToken = require('../middleware/validateHandlerToken');

router.use(validateHandlerToken);

router.route('/').get(getContacts).post(createContact);

router.route('/:id').put(updateContact).delete(deleteContact).get(getContact);

module.exports = router;