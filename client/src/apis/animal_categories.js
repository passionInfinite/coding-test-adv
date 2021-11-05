export async function listAnimalCategories() {
  try {
    const res = await fetch('/animal-categories');
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
