import RoverSelect from './RoverSelect';

const Header = (state) => {
  return `
    <header class="text-white bg-indigo-700">
      <div class="items-center justify-between max-w-5xl p-4 py-8 mx-auto text-center md:flex md:py-12 xl:px-0">
        <h1 class="text-xl font-bold leading-10 header-title sm:text-2xl md:text-3xl lg:text-4xl">Mars Rover Dashboard</h1>
        ${RoverSelect(state)}
      </div>
    </header>
  `;
};

export default Header;
