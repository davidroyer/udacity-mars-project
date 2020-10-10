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
  let { activeRover } = state;
  const { rover } = activeRover[0];
  return `
      <h2>${rover.name}</h2>
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
  const data = await fetch(`http://localhost:3000/rovers?name=${roverName}`);
  const { latest_photos } = await data.json();
  updateStore(store, { activeRover: latest_photos });
};
