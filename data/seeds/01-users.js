const data = [
  {
    first: 'Brittni',
    last: 'Green',
    username: 'Web49AlumBrittni',
    email: 'brittni@bloomtech.edu',
    password: '$2a$08$fhXGXK0V5kzXnK17Pbd.veaW9rt6vSDkeTAbbCfiMu19G9cHb17Fm',
  },
  {
    first: 'Chris',
    last: 'Castillo',
    username: 'Web49AlumChris',
    email: 'chris@bloomtech.edu',
    password: '$2a$08$25C9O6p1ZUSf.2z5TvAmTuh5SVoypY6aOrbw2EVqY5TNTu1Z3HFMC',
  },
  {
    first: 'Eduardo',
    last: 'Escobar',
    username: 'Web50AlumEduardo',
    email: 'eduardo@bloomtech.edu',
    password: '$2a$08$rMJd6dSUzWfnIkVTODpqAuP1ucORM5JSgDE9krK6/VhQHcCbeSdiG',
  },
  {
    first: 'Michael',
    last: 'Kidby',
    username: 'Web48AlumBrittni',
    email: 'michael@bloomtech.edu',
    password: '$2a$08$j.bnirZlfmMmsjXxYM8Dmu3a6mZi8m54J4xjKgaD78KQbcCf0qlD2',
  },
  {
    first: 'Shamir',
    last: 'Gibbons',
    username: 'Web50AlumBrittni',
    email: 'shamir@bloomtech.edu',
    password: '$2a$08$2N0jUsxT2QhkeuJGBFcTN.daNkEWInIiYvuI96b9vWdnQ18qriMQO',
  },
];

exports.seed = async function (knex) {
  await knex('users').truncate();
  await knex('users').insert(data);
};
