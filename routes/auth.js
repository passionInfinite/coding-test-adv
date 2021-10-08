const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

/* Get an auth token */
router.get('/', async (req, res) => {
  const token = jwt.sign(
    { user: 'somevaliduser' },
    process.env.SIGNING_KEY,
    { expiresIn: '2 days' },
  );

  res.send(token);
});

module.exports = router;
