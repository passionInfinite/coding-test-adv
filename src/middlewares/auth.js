const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const authHeader = req.header('Authorization');
    // If there is no authHeader present reject straight away.
    if (!authHeader) {
      return res.status(403).send('Access denied.');
    }

    // If there is authHeader present split and check for token.
    let token = authHeader.split(' ');
    if (token.length >= 2) {
      [, token] = token;
    } else {
      return res.status(403).send('Access denied.');
    }

    const decoded = jwt.verify(token, process.env.SIGNING_KEY);
    if (decoded.user === 'somevaliduser') {
      next();
    } else {
      throw new Error('Invalid or expired token');
    }
  } catch (error) {
    return res.status(400).send('Invalid token');
  }
};
