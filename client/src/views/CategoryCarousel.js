import React, { useEffect, useState } from 'react';
import { listAnimalCategories } from '../apis/animal_categories';
import { listAnimalPhotosByCategories } from '../apis/animal_photos';
import CategoriesFilter from '../components/CategoriesFilter';
import NextButton from '../components/NextButton';
import PrevButton from '../components/PrevButton';
import Loader from '../components/shared/Loader';

function CategoryCarousel(props) {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeItem, setActiveItem] = useState(0);
  const [categories, setCategories] = useState([]);
  const [selectedCategoriesIds, setSelectedCategoriesIds] = useState([]);
  const [images, setImages] = useState([]);


  /** Loads initial categories on page load.  */
  useEffect(() => {
    listAnimalCategories()
      .then(categories => {
        if (categories.length) {
          setSelectedCategoriesIds([categories[0].id]);
        }
        setCategories(categories);
      });
  }, []);


  /** This effect is only runs when the selectedCategories changes to fetch new photos based on new selected categories */
  useEffect(() => {
    if (selectedCategoriesIds.length) {
      setLoading(true);
      setError('');
      setActiveItem(0);
      loadPhotos(selectedCategoriesIds);
    }
  }, [selectedCategoriesIds])


  /** Loads photos based on the selected categoryIds */
  async function loadPhotos(categoryIds) {
    try {
      const photos = await listAnimalPhotosByCategories(categoryIds);
      setImages(photos);
      setSelectedCategoriesIds(categoryIds);
    } catch (err) {
      if (err) {
        setError('Opps, Unable to load carousel at the moment. Please try again later!');
      }
    }
    setTimeout(() => setLoading(false), 500);
  }

  /** Handles the next button click for the carousel.  */
  function handleNextClick(e) {
    e.preventDefault();
    if (activeItem >= images.length - 1) {
      setActiveItem(0);
    } else if (activeItem < images.length - 1 && activeItem >= 0) {
      setActiveItem(activeItem + 1);
    }
  };

  /** Handles the previous button click for the carousel.  */
  function handlePrevClick(e) {
    e.preventDefault();
    if (activeItem <= 0) {
      setActiveItem(images.length - 1);
    } else {
      setActiveItem(activeItem - 1);
    }
  };

  return (
    <div className="d-flex flex-column p-4">

      {/* Categories Container */}
      <div className="d-flex flex-row justify-content-center">
        <CategoriesFilter
          categories={categories}
          selected={selectedCategoriesIds}
          onCategorySelected={(categoryIds) => {
            if (!categoryIds.length) {
              setError('Please Select atleast one category to show images.');
            }
            setSelectedCategoriesIds(categoryIds);
          }}
        />
      </div>
      {/* End of Categories Container */}

      {/* Error Container */}
      {
        error && (
          <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
            <div class="alert alert-danger" role="alert">
              {error}
            </div>
          </div>
        )
      }
      {/* End of Error Container */}

      {/* Loading Container */}
      {
        loading && (
          <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
            <Loader color="text-primary" />
          </div>
        )
      }
      {/* End of Loading Container */}

      {/* Carousel Container */}
      {
        !loading && images.length > 0 && (
          <div className="d-flex flex-row justify-content-center align-items-center">
            {/* Prev Button */}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <PrevButton onClick={handlePrevClick} />
            </div>
            {/* Image */}
            <div className="d-flex flex-column">
              <div className="d-flex flex-row justify-content-center m-4">
                <img src={images[activeItem].photo_url} alt={`desc-${activeItem}`} height="400" />
              </div>
            </div>
            {/* Next Button */}
            <div className="d-flex flex-column justify-content-center align-items-center">
              <NextButton onClick={handleNextClick} />
            </div>
          </div>
        )
      }
    </div>
  )
};

export default CategoryCarousel;
