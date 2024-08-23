import states from 'states-us';

/**
 * Transforms the list of U.S. states into an array of objects suitable for use in a select dropdown.
 * Each object contains:
 * - `label`: The full name of the state.
 * - `value`: The abbreviation of the state.
 *
 * This transformation is used to populate the state selection options in forms like `CreateEmployeeForm`.
 *
 * @type {Array<{ label: string, value: string }>}
 */
export const usStates = states.map((state) => ({
  label: state.name,
  value: state.abbreviation,
}));
