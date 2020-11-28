// if (module.hot) module.hot.accept();

import Header from './components/Header/Index';
import Main from './components/Main/Index';
import { getStateJS, updateState } from './store';

const siteURL = process.env.NODE_ENV === 'production' ? 'https://mars-rovers-dashboard.herokuapp.com' : 'http://localhost:3000';

const root = document.getElementById('root');

const render = (root, state) => {
  root.innerHTML = App(state);
};

const App = (state) => {
  const { selectedRover } = state;

  return `
    ${Header(state)}
    ${Main(selectedRover)}
  `;
};

window.addEventListener('load', () => {
  render(root, getStateJS());
});

root.addEventListener('change', async (event) => {
  if (event.target.id !== 'rover-select') return;

  const selectedRover = event.target.value;
  const roverData = await getRoverData(selectedRover);

  updateState({
    key: 'selectedRover',
    value: roverData
  });

  render(root, getStateJS());
});

const getRoverData = async (roverName) => {
  const data = await fetch(`${siteURL}/rovers?name=${roverName}`);
  const { latest_photos } = await data.json();
  const { rover } = latest_photos[0];
  const photos = latest_photos.map((obj) => obj.img_src);

  return { ...rover, photos };
};
