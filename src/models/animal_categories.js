const db = require('../loaders/db');

class AnimalCategories {

  static tableName = 'animal_categories';

  static async readAll() {
    const records = await db(this.tableName).select('id', 'category').returning('category');
    return records;
  }

  static async create({ category }) {
    const record = await db(this.tableName)
      .insert({
        category
      })
      .returning(['id', 'category']);
    return record;
  }

  static async delete({ category_id }) {
    const deletedRecordId = await db(this.tableName)
      .where('category_id', category_id)
      .del(['id']);
    return deletedRecordId;
  }
}
module.exports = AnimalCategories;
