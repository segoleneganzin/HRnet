import states from 'states-us';

export const usStates = states.map((state) => ({
  label: state.name,
  value: state.abbreviation,
}));
