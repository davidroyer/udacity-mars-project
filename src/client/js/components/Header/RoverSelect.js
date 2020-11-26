const RoverSelect = (state) => {
  const { rovers, selectedRover } = state;

  const DefaultSelectOption = () => {
    const roverWasSelected = rovers.some((rover) => rover === selectedRover.name);
    const selectedValue = roverWasSelected ? null : 'selected';

    return `
      <option ${selectedValue} disabled value="">Select A Rover</option>
    `;
  };

  const RoverSelectOptions = rovers
    .map((rover) => {
      const selectedValue = selectedRover.name === rover ? 'selected' : null;

      return `
        <option ${selectedValue} class="capitalize" value="${rover}">${rover}</option>
      `;
    })
    .join('');

  return `
    <div class="w-5/6 mx-auto mt-3 rover-selector-wrapper md:mt-0 md:mr-0 md:w-1/3 md:mb-0">
      <label class="block max-w-sm mx-auto">
        <select id="rover-select" class="block w-full mt-1 font-bold text-gray-700 form-select">
          ${DefaultSelectOption()}
          ${RoverSelectOptions}
        </select>
      </label>
    </div>
  `;
};

export default RoverSelect;
