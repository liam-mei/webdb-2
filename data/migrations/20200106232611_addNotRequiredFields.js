exports.up = function(knex) {
  return knex.schema.table("cars", cars => {
    cars
      .string("transmission_type")
    cars
      .string("title_status")
  });
};

exports.down = function(knex) {
  return knex.schema.table("cars", cars => {
    cars.dropColumns("vin", "model", "mileage");
  });
};
