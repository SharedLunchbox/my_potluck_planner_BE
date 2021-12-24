const data = [
  {
    first: 'Test',
    last: 'Tester',
    email: 'test@test.com',
  },
  {
    first: 'Tester',
    last: 'Test',
    email: 'test@testing.com',
  },
  {
    first: 'Test',
    last: 'Testing',
    email: 'test@tester.com',
  },
  {
    first: 'John',
    last: 'John',
    email: 'john@john.com',
  },
  {
    first: 'Mary',
    last: 'Mary',
    email: 'mary@mary.com',
  },
  {
    first: 'Larry',
    last: 'Bird',
    email: 'theBird@nba.com',
  },
  {
    first: 'Brahn',
    last: 'Hjvorsik',
    email: 'nord@sweden.com',
  },
  {
    first: 'Aclomydies',
    last: 'Daustarnis',
    email: 'greek@rome.com',
  },
];

exports.seed = async function (knex) {
  await knex('guests').truncate();
  await knex('guests').insert(data);
};
