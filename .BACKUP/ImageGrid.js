const ImageGrid = function (photosArray) {
  console.log('ImageGrid -> photosArray', photosArray);
  return photosArray.map((photo) => `<div><img src="${photo}"/></div>`);
};
console.log('ImageGrid -> ImageGrid', ImageGrid);

export default ImageGrid;
