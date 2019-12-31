exports.up = function(knex) {
  return knex.schema.table("cars", cars => {
    cars
      .string("vin")
      .unique()
      .notNullable()
      .defaultTo("adsf");
    cars
      .string("model")
      .notNullable()
      .defaultTo("adsf");
    cars
      .integer("mileage")
      .notNullable()
      .defaultTo("adsf");
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", cars => {
    cars.dropColumns("vin", "model", "mileage");
  });
};
