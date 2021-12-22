exports.up = function (knex) {
  return knex.schema
    .createTable('users', (users) => {
      users.increments('user_id');
      users.string('first', 128).notNullable();
      users.string('last', 128).notNullable();
      users.string('username', 20).notNullable().unique();
      users.string('email', 128).notNullable().unique();
      users.string('password', 128).notNullable();
    })
    .createTable('potlucks', (potlucks) => {
      potlucks.increments('potluck_id');
      potlucks.string('name', 128).notNullable();
      potlucks.string('date', 256).notNullable();
      potlucks.string('time', 128).notNullable();
      potlucks.string('location', 128).notNullable();
      potlucks
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
    .createTable('guests', (guests) => {
      guests.increments('guest_id');
      guests.string('first', 128).notNullable();
      guests.string('last', 128).notNullable();
      guests.string('email', 256).notNullable();
      guests
        .integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    })
    .createTable('items', (items) => {
      items.increments('item_id');
      items.string('name', 128).notNullable();
      items
        .integer('potluck_id')
        .unsigned()
        .notNullable()
        .references('potluck_id')
        .inTable('potlucks')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
      items
        .integer('guest_id')
        .unsigned()
        .references('guest_id')
        .inTable('guests')
        .onUpdate('RESTRICT')
        .onDelete('RESTRICT');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('items')
    .dropTableIfExists('guests')
    .dropTableIfExists('potlucks')
    .dropTableIfExists('users');
};
