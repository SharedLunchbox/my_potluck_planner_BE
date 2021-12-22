const data = [
  {
    name: 'Holiday Hangout',
    date: '01/22/2154',
    time: '10:00 AM',
    location: 'New York, NY',
    user_id: 1,
  },
  {
    name: 'Chill and Grill',
    date: '02/28/2005',
    time: '02:00 PM',
    location: 'Los Angeles, CA',
    user_id: 1,
  },
  {
    name: 'Office Dinner Party',
    date: '11/05/2025',
    time: '12:00 AM',
    location: 'Des Moines, IA',
    user_id: 2,
  },
  {
    name: 'Its a birthday, I guess',
    date: '05/14/1954',
    time: '12:00 PM',
    location: 'Portland, OR',
    user_id: 3,
  },
  {
    name: 'Una Posada Maravillosa',
    date: '06/06/2006',
    time: '06:00 AM',
    location: 'Austin, TX',
    user_id: 4,
  },
  {
    name: 'Weekend Bbq',
    date: '08/25/2988',
    time: '02:00 PM',
    location: 'Honolulu, HI',
    user_id: 4,
  },
];

exports.seed = async function (knex) {
  await knex('potlucks').truncate();
  await knex('potlucks').insert(data);
};
