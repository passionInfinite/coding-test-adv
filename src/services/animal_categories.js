const AnimalCategoriesModel = require('../models/animal_categories');

class AnimalCategoriesService {
  static async readAll() {
    const categories = await AnimalCategoriesModel.readAll();
    return categories;
  }
}

module.exports = AnimalCategoriesService;
