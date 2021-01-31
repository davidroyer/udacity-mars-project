import RoverImagesSection from './RoverImagesSection';
import RoverInfoSection from './RoverInfoSection';

const Main = (selectedRover) => {
  if (!selectedRover.name)
    return `
  <main class="pb-16 mt-6 mb-6 flex h-full items-center justify-center">
  <h2 class="text-4xl text-indigo-900 font-light">
  	Select a rover in the menu at top of the page.
  </h2>
  </main>
  `;

  return `
    <main class="pb-16 mt-6 mb-6">
      <div class="max-w-4xl px-4 mx-auto main-content-wrapper">
        <!-- Rover Info -->
        ${RoverInfoSection(selectedRover)}

        <!-- Rover Images -->
        ${RoverImagesSection(selectedRover.photos)}
      </div>
    </main>
  `;
};

export default Main;
