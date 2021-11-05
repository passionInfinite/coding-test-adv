import React from 'react';
import Button from './shared/Button';

function CategoriesFilter(props) {

  const { categories, selected, onCategorySelected } = props;

  const handleSelectCategory = (e) => {
    e.preventDefault();
    const id = parseInt(e.target.id);
    if (selected.includes(id)) {
      onCategorySelected(selected.filter(c => c !== id));
    } else {
      onCategorySelected([...new Set([...selected, id])]);
    }
  }

  return categories.map((category) => {
    return <Button
      className="mx-2"
      value={category.category}
      id={category.id}
      isActive={selected.indexOf(category.id) !== -1}
      onClick={handleSelectCategory}
    />;
  });
}

export default CategoriesFilter;
