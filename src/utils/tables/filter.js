/**
 * Pure function that filters employees based on filterText.
 * It does not modify the original array but returns a new filtered array.
 *
 * @param {Array} employees - The list of employees to filter.
 * @param {string} filterText - The filter text used to match against employee fields.
 * @returns {Array} - The filtered list of employees.
 */
export const filterEmployees = (employees, filterText) => {
  if (!filterText) return employees;

  const lowercasedFilter = filterText.toLowerCase();
  return employees.filter(
    (employee) =>
      employee.firstName.toLowerCase().includes(lowercasedFilter) ||
      employee.lastName.toLowerCase().includes(lowercasedFilter) ||
      employee.startDate.toLowerCase().includes(lowercasedFilter) ||
      employee.department.toLowerCase().includes(lowercasedFilter) ||
      employee.dateOfBirth.toLowerCase().includes(lowercasedFilter) ||
      employee.street.toLowerCase().includes(lowercasedFilter) ||
      employee.city.toLowerCase().includes(lowercasedFilter) ||
      employee.state.toLowerCase().includes(lowercasedFilter) ||
      employee.zipCode.toLowerCase().includes(lowercasedFilter)
  );
};
