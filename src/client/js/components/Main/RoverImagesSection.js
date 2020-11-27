const RoverImagesSection = (photos) => {
  const ImageList = photos
    .map((photo) => {
      return `
      <div class="bg-gray-300 rover-image h-32 shadow-xl sm:h-48">
        <img src="${photo}" class="w-full h-full object-cover rounded-md" alt="Rover Image">
      </div>
    `;
    })
    .join('');

  return `
    <div class="grid grid-cols-2 gap-4 rover-images md:grid-cols-3 md:gap-8">
      ${ImageList}
    </div>
  `;
};

export default RoverImagesSection;
