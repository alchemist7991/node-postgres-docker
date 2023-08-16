const router = require('express').Router();
const userController = require('../../controllers/api/user.controller');

router.get('/', userController.getAllUsers);

module.exports = router;