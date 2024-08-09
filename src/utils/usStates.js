import states from 'states-us';

// const states = states.map((state) => {name : state.name, abbreviation:state.abbreviation});
export const usStates = states.map((state) => ({
  label: state.name,
  value: state.abbreviation,
}));
