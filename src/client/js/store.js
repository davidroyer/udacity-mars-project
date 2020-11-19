import { fromJS } from 'immutable';

let state = fromJS({
  rovers: ['Curiosity', 'Opportunity', 'Spirit'],
  selectedRover: {}
});

export const getState = () => {
  return state;
};

export const getStateJS = () => {
  return state.toJS();
};

export const updateState = ({ key, value }) => {
  state = state.set(key, value);
};
