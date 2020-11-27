import RoverImagesSection from './RoverImagesSection';
import RoverInfoSection from './RoverInfoSection';

const Main = (selectedRover) => {
  if (!selectedRover.name) return `<main class="pb-16 mt-6 mb-6">`;

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
