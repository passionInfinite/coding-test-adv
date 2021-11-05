const AnimalPhotosModel = require('../models/animal_photos');

class AnimalPhotosService {
  static async listByCategoryIds(categoryIds = []) {
    let ids = categoryIds;
    if (!(ids instanceof Array)) {
      ids = [ids];
    }
    const photos = await AnimalPhotosModel.readAllByCategoryIds(ids);
    return photos;
  }

  static async create(payload) {
    const photo = await AnimalPhotosModel.create(payload);
    return photo;
  }
}

module.exports = AnimalPhotosService;
