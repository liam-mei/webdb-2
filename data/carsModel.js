const db = require("./dbConfig");

function get() {
  return db("cars");
}

function getById(id) {
  return db("cars")
    .where({ id })
    .first();
}

function insert(newCar) {
  return db("cars")
    .insert(newCar)
    .then(ids => {
      console.log("ids: ", ids)
      return getById(ids[0]);
    });
}

function update(updatedCar) {
  return db("cars")
    .where({ id: updatedCar.id })
    .update(updatedCar);
}

function remove(id) {
  return db("cars")
    .where({ id })
    .del();
}

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};
