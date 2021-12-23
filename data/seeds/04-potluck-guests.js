const data = [
    {
      potluck_id: '1',
      guest_id: '1',
    },
    {
      potluck_id: '1',
      guest_id: '2',
    },
    {
      potluck_id: '1',
      guest_id: '3',
    },
    {
      potluck_id: '2',
      guest_id: '4',
    },
    {
      potluck_id: '3',
      guest_id: '4',
    },
    {
      potluck_id: '5',
      guest_id: '6',
    },
    {
      potluck_id: '6',
      guest_id: '7',
    },
    {
      potluck_id: '6',
      guest_id: '8',
    },
  ];
  
  exports.seed = async function (knex) {
    await knex('potluck_guests').truncate();
    await knex('potluck_guests').insert(data);
  };