
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {id: 1, vin: 'a635a658f5s', model: 'corolla', milage: 1},
        {id: 2, vin: 'd65w5d564as', model: 'prius', milage: 2},
        {id: 3, vin: 'c6546e56254', model: 'rav4', milage: 3},
      ]);
    });
};
