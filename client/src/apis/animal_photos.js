export async function listAnimalPhotosByCategories(categoryIds) {
  try {
    const res = await fetch(`/animal-photos?categoryIds=${categoryIds.join(',')}`);
    if (res) {
      return res.json();
    } else {
      return [];
    }
  } catch (err) {
    if (err) {
      // Log error to somewhere using logging service.
      throw err;
    }
  }
};
