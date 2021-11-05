const db = require('../loaders/db');

class AnimalCategories {

  static tableName = 'animal_categories';

  static async readAll() {
    const records = await db(this.tableName).select('id', 'category').returning('category');
    return records;
  }

  static async findOrCreate(category) {
    const categoryRecord = await db(this.tableName)
      .where('category', category)
      .returning(['id', 'category']);

    if (categoryRecord.length == 0) {
      const newCategoryRecord = await db(this.tableName)
        .insert({ category })
        .returning(['id', 'category']);
      return newCategoryRecord.length > 0 ? newCategoryRecord[0] : {};
    } else {
      return categoryRecord.length > 0 ? categoryRecord[0] : {};
    }
  }

  static async delete(categoryNameOrId) {
    const deletedRecordId = await db(this.tableName)
      .where('id', categoryNameOrId)
      .orWhere('category', categoryNameOrId)
      .del(['id']);
    return deletedRecordId;
  }
}
module.exports = AnimalCategories;
