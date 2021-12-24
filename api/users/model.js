const db = require('../../data/db-config');

async function add(user) {
  const [user_id] = await db('users').insert(user);
  return db('users').where('user_id', user_id).first();
}

function findByUsername(username) {
  return db('users').where('username', username).first();
}

function findBy(filter) {
  return db('users').where(filter);
}

module.exports = {
  add,
  findBy,
  findByUsername,
};
