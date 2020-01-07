const express = require("express");
const db = require("./data/carsModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await db.get());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    res.json(await db.getById(id));
  } catch (error) {
    next(error);
  }
});

router.post("/", (req, res, next) => {
  // console.log("body", req.body)
  const { vin, model, mileage, transmission_type, title_status } = req.body;
  const newCar = { vin, model, mileage, transmission_type, title_status };
  // try {
  //   const postedCar = await db.insert(newCar);
  //   console.log(postedCar)
  //   res.json(postedCar);
  // } catch (error) {
  //   next(error);
  // }
  db.insert(newCar)
    .then(postedCar => res.json(postedCar))
    .catch(err => console.log(error));
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  const { vin, model, mileage, transmission_type, title_status } = req.body;
  const newCar = { vin, model, mileage, transmission_type, title_status, id };
  try {
    res.json(await db.update(newCar));
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  const { id } = req.params;
  try {
    res.json(await db.remove(id));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
