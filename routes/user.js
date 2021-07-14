const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/test', (req, res) => {
  console.log('lalala', req.body);
  res.json({ message: 'success' });
});

module.exports = router;
