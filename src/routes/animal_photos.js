const express = require('express');

const AnimalPhotosService = require('../services/animal_photos');

const router = express.Router();

/* Get all the photos based on the category ids */
router.get('/', async (req, res) => {
  const categoryIds = req.query.categoryIds ? req.query.categoryIds.split(',') : [];
  if (!categoryIds.length) {
    res.send([]);
  } else {
    const photos = await AnimalPhotosService.listByCategoryIds(categoryIds);
    res.send(photos);
  }
});

module.exports = router;
