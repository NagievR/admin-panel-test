const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.render('bar', { name: 'Bar' });
});

module.exports = router;
