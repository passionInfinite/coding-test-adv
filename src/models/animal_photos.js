const db = require('../loaders/db');

class AnimalPhotos {

  static tableName = 'animal_photos';

  static async readAllByCategoryIds(categoryIds = []) {
    try {
      const records = await db(this.tableName)
        .select('category_id', 'photo_url')
        .whereIn('category_id', categoryIds)
        .orderByRaw('RANDOM()')
        .returning('photo_url');
      return records;
    } catch (err) {
      return [];
    }
  }
}
module.exports = AnimalPhotos;
