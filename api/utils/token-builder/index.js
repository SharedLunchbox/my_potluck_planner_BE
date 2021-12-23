const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');

function buildToken(user) {
  const payload = {
    subject: user.user_id,
    username: user.username,
    email: user.email,
  };
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = {
  buildToken,
};
