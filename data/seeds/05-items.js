const data = [
  {
    name: 'Pizza',
    potluck_id: '1',
    guest_id: '1',
  },
  {
    name: 'Pizza',
    potluck_id: '6',
    guest_id: '8',
  },
  {
    name: 'Sodas',
    potluck_id: '1',
    guest_id: '2',
  },
  {
    name: 'Lasagna',
    potluck_id: '1',
    guest_id: '3',
  },
  {
    name: 'Ribs',
    potluck_id: '5',
    guest_id: '6',
  },
];

exports.seed = async function (knex) {
  await knex('items').truncate();
  await knex('items').insert(data);
};
