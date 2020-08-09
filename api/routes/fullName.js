const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const fullNameController = require('../controllers/fullName');

router.get('/', checkAuth, fullNameController.names_get_all)

router.post('/', checkAuth, fullNameController.names_create_name)

router.get('/:_id', checkAuth, fullNameController.orders_get_order)

router.patch('/:_id', checkAuth, fullNameController.names_update_name)

router.delete('/:_id', checkAuth, fullNameController.orders_delete_order)

router.delete('/', checkAuth, fullNameController.orders_deletes_order)

module.exports = router