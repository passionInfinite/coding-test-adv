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

  static async create(payload) {
    try {
      const photos = await db(this.tableName)
        .insert({
          category_id: payload.category_id,
          photo_url: payload.photo_url,
        })
        .returning('id');
      return photos;
    } catch (err) {
      console.log(err);
      // in general throw error from here that will be catched by the logging service.
      return null;
    }
  }

  static async delete({ category_id }) {
    try {
      const photos = await db(this.tableName)
        .where('category_id', category_id)
        .del(['id']);
      return photos;
    } catch (err) {
      // in general throw error from here that will be catched by the logging service.
      return null;
    }
  }
}
module.exports = AnimalPhotos;
