const ImageGrid = function (photosArray) {
  console.log("ImageGrid -> photosArray", photosArray);
  return photosArray.map((photo) => `<img src="${photo}"/>`);
};
console.log("ImageGrid -> ImageGrid", ImageGrid);

export default ImageGrid;
