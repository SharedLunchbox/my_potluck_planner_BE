const data = [
  {
    first: 'Test',
    last: 'Tester',
    email: 'test@test.com',
    potluck_id: '1',
  },
  {
    first: 'Tester',
    last: 'Test',
    email: 'test@testing.com',
    potluck_id: '1',
  },
  {
    first: 'Test',
    last: 'Testing',
    email: 'test@tester.com',
    potluck_id: '1',
  },
  {
    first: 'John',
    last: 'John',
    email: 'john@john.com',
    potluck_id: '2',
  },
  {
    first: 'Mary',
    last: 'Mary',
    email: 'mary@mary.com',
    potluck_id: '3',
  },
  {
    first: 'Larry',
    last: 'Bird',
    email: 'theBird@nba.com',
    potluck_id: '5',
  },
  {
    first: 'Brahn',
    last: 'Hjvorsik',
    email: 'nord@sweden.com',
    potluck_id: '6',
  },
  {
    first: 'Aclomydies',
    last: 'Daustarnis',
    email: 'greek@rome.com',
    potluck_id: '6',
  },
];

exports.seed = async function (knex) {
  await knex('guests').truncate();
  await knex('guests').insert(data);
};
