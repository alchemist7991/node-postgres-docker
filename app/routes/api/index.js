const router = require('express').Router();

router.use('/v1/users', require('./users'));

module.exports = router;