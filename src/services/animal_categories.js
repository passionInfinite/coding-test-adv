const AnimalCategoriesModel = require('../models/animal_categories');

class AnimalCategoriesService {
  static async readAll() {
    const categories = await AnimalCategoriesModel.readAll();
    return categories;
  }

  static async create(categoryName) {
    const category = await AnimalCategoriesModel.findOrCreate(categoryName);
    return category;
  }

  static async delete(categoryNameOrId) {
    if (categoryNameOrId) {
      const categoryId = await AnimalCategoriesModel.delete(categoryNameOrId);
      return categoryId;
    }
    return null;
  }
}

module.exports = AnimalCategoriesService;
