const db = require('../../data/db-config');

function findPotlucks(user_id) {
  return db('potlucks').where('user_id', user_id);
}

module.exports = {
  findPotlucks,
};
