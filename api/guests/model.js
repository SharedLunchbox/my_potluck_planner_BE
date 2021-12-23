const db = require('../../data/db-config');

async function addGuest(guest) {
  const [guest_id] = await db('guests').insert(guest);
  return db('guests').where('guest_id', guest_id).first();
}

function getGuests(user_id) {
  return db('users as u')
    .join('potlucks as p', 'u.user_id', 'p.user_id')
    .join('potluck_guests as pg', 'pg.potluck_id', 'p.potluck_id')
    .join('guests as g', 'g.guest_id', 'pg.guest_id')
    .where('u.user_id', user_id);
}

module.exports = {
  addGuest,
  getGuests,
};
