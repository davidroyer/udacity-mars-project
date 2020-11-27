const RoverInfoSection = (rover) => {
  return `
  <div class="grid gap-2 mt-16 mb-20 rover-info grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-8">
    <div
      class="flex flex-col items-center justify-center w-full h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
      <div class="font-thin text-gray-700 rover-info-label">
        Rover Name
      </div>
      <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
        ${rover.name}
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center w-full h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
      <div class="font-thin text-gray-700 rover-info-label">
        Status
      </div>
      <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text capitalize">
        ${rover.status}
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center w-full h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
      <div class="font-thin text-gray-700 rover-info-label">
        Launch Date
      </div>
      <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
        ${rover.launch_date}
      </div>
    </div>

    <div
      class="flex flex-col items-center justify-center w-full h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
      <div class="font-thin text-gray-700 rover-info-label">
        Landing Date
      </div>
      <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
        ${rover.landing_date}
      </div>
    </div>
  </div>
  `;
};

export default RoverInfoSection;
