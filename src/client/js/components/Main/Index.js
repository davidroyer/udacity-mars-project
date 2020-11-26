const Main = (selectedRover) => {
  if (!selectedRover.name) return `<main class="pb-16 mt-6 mb-6">`;

  return `
    <main class="pb-16 mt-6 mb-6">
      <div class="max-w-4xl px-4 mx-auto main-content-wrapper">
        <!-- Rover Info -->
        <div class="grid gap-6 mt-16 mb-20 rover-info sm:grid-cols-2 lg:grid-cols-4">

          <div
            class="flex flex-col items-center justify-center w-48 h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
            <div class="font-thin text-gray-700 rover-info-label">
              Rover Name
            </div>
            <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
              Curiosity
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-48 h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
            <div class="font-thin text-gray-700 rover-info-label">
              Status
            </div>
            <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
              Active
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-48 h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
            <div class="font-thin text-gray-700 rover-info-label">
              Launch Date
            </div>
            <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
              2011-11-26
            </div>
          </div>

          <div
            class="flex flex-col items-center justify-center w-48 h-32 mx-auto bg-gray-300 rounded-md shadow-sm rover-info-item">
            <div class="font-thin text-gray-700 rover-info-label">
              Landing Date
            </div>
            <div class="-mt-1 text-2xl font-bold text-indigo-900 rover-info-text">
              2012-08-06
            </div>
          </div>
        </div>

        <!-- Rover Images -->
        <div class="grid grid-cols-2 gap-4 rover-images md:grid-cols-3">
          <div class="h-20 bg-gray-300 rover-image ">1</div>
          <div class="h-20 bg-gray-300 rover-image">2</div>
          <div class="h-20 bg-gray-300 rover-image">3</div>
          <div class="h-20 bg-gray-300 rover-image">4</div>
          <div class="h-20 bg-gray-300 rover-image">5</div>
          <div class="h-20 bg-gray-300 rover-image">6</div>
        </div>

      </div>
    </main>
  `;
};

export default Main;
