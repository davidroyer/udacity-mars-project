const ImagesGridHTML = (photosArray) => {
  const imagesGrid = document.createElement('div');
  imagesGrid.classList.add('rover-images', 'w-3/4', 'grid', 'grid-cols-3', 'gap-4');

  photosArray.forEach((photo) => {
    let gridItemWrapper = document.createElement('div');
    gridItemWrapper.classList.add('grid-item');
    gridItemWrapper.innerHTML = `<img src="${photo}" class="image-grid-item"/>`;
    imagesGrid.appendChild(gridItemWrapper);
  });

  return imagesGrid.outerHTML;
};

export default ImagesGridHTML;
