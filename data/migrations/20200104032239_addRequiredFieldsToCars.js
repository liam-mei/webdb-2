exports.up = function(knex) {
  return knex.schema.table("cars", cars => {
    cars
      .string("vin")
      .unique()
      .notNullable();
    cars.string("model").notNullable();
    cars.integer("mileage").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", cars => {
    cars.dropColumns("vin", "model", "mileage");
  });
};
