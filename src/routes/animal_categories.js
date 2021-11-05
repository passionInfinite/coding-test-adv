const express = require('express');

const authMiddleware = require('../middlewares/auth');

const AnimalCategoriesService = require('../services/animal_categories');

const AnimalPhotosService = require('../services/animal_photos');

const router = express.Router();

/* Get all the categories */
router.get('/', async (req, res) => {
  res.send(await AnimalCategoriesService.readAll());
});

/* Create new categories with photos */
router.post('/', authMiddleware, async (req, res) => {
  const payload = req.body;
  Object.keys(payload).forEach(async (categoryName) => {
    if (payload[categoryName] && payload[categoryName].length) {
      const category = await AnimalCategoriesService.create(categoryName);
      payload[categoryName].forEach(async (photoUrl) => {
        await AnimalPhotosService.create({ category_id: category.id, photo_url: photoUrl });
      });
    }
  });
  res.status(200).send('Posted successfully!');
});

/** Delete new category and cascades the related photos as well. */
router.delete('/:id', authMiddleware, async (req, res) => {
  if (req.params.id) {
    try {
      const category = await AnimalCategoriesService.delete(req.params.id);
      res.send(category);
    } catch (err) {
      // log the error somewhere.
      res.send([]);
    }
  }
});

module.exports = router;
