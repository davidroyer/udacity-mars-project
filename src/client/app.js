if (module.hot) module.hot.accept();

const root = document.getElementById("root");

let store = {
  rovers: ["Curiosity", "Opportunity", "Spirit"],
};

const updateStore = (store, newState) => {
  store = Object.assign(store, newState);
  render(root, store);
};

const render = (root, state) => {
  console.log("render -> state", state);
  root.innerHTML = App(state);
};

// eslint-disable-next-line no-unused-vars
const App = (state) => {
  let { selectedRover } = state;
  const { name, photos } = selectedRover;
  return `
      <h2>${name}</h2>
      <img src="${photos[0]}" alt=""/>
    `;
};

// listening for load event because page should load before any JS is called
window.addEventListener("load", () => {
  // render(root, store);
});

const roverOptions = document.querySelectorAll(".rover");

roverOptions.forEach((rover) =>
  rover.addEventListener("click", function () {
    getRoverData(this.id);
  })
);

const getRoverData = async (roverName) => {
  const data = await fetch(`http://localhost:4040/rovers?name=${roverName}`);
  const { latest_photos } = await data.json();
  const { rover } = latest_photos[0];
  const photos = latest_photos.map((obj) => obj.img_src);
  updateStore(store, { selectedRover: { ...rover, photos } });
};
