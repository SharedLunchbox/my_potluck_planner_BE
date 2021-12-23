const { findByUsername, findBy } = require('../../users/model');

const checkUsernameExists = async (req, res, next) => {
  try {
    const { username } = req.body;
    const existing = await findByUsername(username);
    if (existing) {
      next({ status: 401, message: 'username taken' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const validatePost = async (req, res, next) => {
  try {
    const { username, password, email, first, last } = req.body;
    if (!username) {
      next({ status: 401, message: 'username required' });
    } else if (!password) {
      next({ status: 401, message: 'password required' });
    } else if (!email) {
      next({ status: 401, message: 'email required' });
    } else if (!first) {
      next({ status: 401, message: 'first name required' });
    } else if (!last) {
      next({ status: 401, message: 'last name required' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const validateLogin = async (req, res, next) => {
  try {
    const [user] = await findBy({ username: req.body.username });
    if (!user) {
      next({ status: 401, message: 'invalid credentials' });
    } else {
      req.user = user;
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  checkUsernameExists,
  validatePost,
  validateLogin,
};
