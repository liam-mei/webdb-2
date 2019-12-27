exports.up = function(knex) {
  return knex.schema.createTable("cars", function(cars) {
    // if column name is not passed to it, 'id' is default
    cars.increments();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
