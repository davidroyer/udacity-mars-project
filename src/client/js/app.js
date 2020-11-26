/* eslint-disable no-unused-vars */
// if (module.hot) module.hot.accept();

import { fromJS } from 'immutable';
import Header from './components/Header/Index';
import Main from './components/Main/Index';
import { getStateJS, updateState } from './store';
const siteURL = process.env.NODE_ENV === 'production' ? 'https://mars-rovers-dashboard.herokuapp.com/' : 'http://localhost:4000';

const root = document.getElementById('root');

// Render function to set HTML
const render = (root, state) => {
  root.innerHTML = App(state);
  console.log('render -> CHECKING STORE STATE', state);
};

const App = (state) => {
  const { selectedRover, rovers } = state;
  const { photos } = selectedRover;

  return `
  ${Header(state)}
  ${Main(selectedRover)}
  `;
};

// NOTE: Will need this if start rendering the menu via JavaScript
window.addEventListener('load', () => {
  render(root, getStateJS());
});

root.addEventListener('change', async function (event) {
  if (event.target.id !== 'rover-select') return;
  console.log('VALUE', event.target.value);

  const roverSelect = document.getElementById('rover-select');
  console.log('🚀 ~ file: app.js ~ line 43 ~ event.target.', event.target);

  const selectedRover = event.target.value;
  console.log('🚀 ~ file: app.js ~ line 39 ~ roverSelect', roverSelect);
  const roverData = await getRoverData(selectedRover);

  updateState({
    key: 'selectedRover',
    value: fromJS(roverData)
  });

  console.log('getStateJS()', getStateJS());
  render(root, getStateJS());
});

// eslint-disable-next-line no-unused-vars
const getRoverData = async (roverName) => {
  const data = await fetch(`${siteUrl}/rovers?name=${roverName}`);
  const { latest_photos } = await data.json();
  const { rover } = latest_photos[0];
  const photos = latest_photos.map((obj) => obj.img_src);

  return { ...rover, photos };
};
