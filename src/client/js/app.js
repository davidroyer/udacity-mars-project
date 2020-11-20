if (module.hot) module.hot.accept();

import { fromJS } from 'immutable';
import ImagesGridHTML from './components/ImagesGrid';
import { getStateJS, updateState } from './store';

const root = document.getElementById('root');

// Render function to set HTML
const render = (root, state) => {
  root.innerHTML = App(state);
  console.log('render -> CHECKING STORE STATE', state);
};

const Sidebar = (rover) => {
  const { name, landing_date, launch_date, status } = rover;
  return `
    <div class="rover-info w-1/4 mr-8 p-4 rounded bg-gray-700 text-white">
      <h2 class="rover-info-heading">Rover Information</h2>
      <ul>
        <li><strong>Name: </strong>${name}</li>
        <li><strong>Status: </strong>${status}</li>
        <li><strong>Launch Date: </strong>${launch_date}</li>
        <li><strong>Landing Date: </strong>${landing_date}</li>
      </ul>
    </div>
  `;
};

const App = (state) => {
  const { selectedRover } = state;
  const { photos } = selectedRover;

  return `
    ${Sidebar(selectedRover)}
    ${ImagesGridHTML(photos)}
  `;
};

// NOTE: Will need this if start rendering the menu via JavaScript
window.addEventListener('load', () => {
  // render(root, store);
});

const roverOptions = document.querySelectorAll('.rover-option');

roverOptions.forEach((rover) =>
  rover.addEventListener('click', function () {
    const activeRover = document.querySelector('.rover-option.active');
    if (activeRover) activeRover.classList.remove('active');

    this.classList.add('active');
    getRoverData(this.id);
  })
);

const getRoverData = async (roverName) => {
  const data = await fetch(`http://localhost:4000/rovers?name=${roverName}`);
  const { latest_photos } = await data.json();
  const { rover } = latest_photos[0];
  const photos = latest_photos.map((obj) => obj.img_src);

  updateState({
    key: 'selectedRover',
    value: fromJS({ ...rover, photos })
  });

  render(root, getStateJS());
};
