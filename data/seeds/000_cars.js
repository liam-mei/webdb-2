
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'a635a658f5s', model: 'corolla', mileage: 1},
        {id: 2, vin: 'd65w5d564as', model: 'prius', mileage: 2},
        {id: 3, vin: 'c6546e56254', model: 'rav4', mileage: 3},
      ]);
    });
};
