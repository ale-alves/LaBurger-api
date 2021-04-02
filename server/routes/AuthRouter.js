const { Router } = require('express');
const authController = require('../controller/authController');

const router = Router();

router.post('/', authController.auth);

module.exports = router;