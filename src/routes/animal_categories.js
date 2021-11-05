const express = require('express');

const AnimalCategoriesService = require('../services/animal_categories');

const router = express.Router();

/* Get all the categories */
router.get('/', async (req, res) => {
  res.send(await AnimalCategoriesService.readAll());
});

module.exports = router;
