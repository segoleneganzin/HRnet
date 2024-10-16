import dayjs from 'dayjs';
import { sortDate, sortNumber, sortString } from '../sort';

/**
 * Custom sorting function for sorting an array of objects based on a specified selector and direction.
 * The function can handle strings, numbers, and date values. It is designed to work with the
 * DataTable component from 'react-data-table-component'.
 * @param {Array<Object>} rows - The array of employee objects to be sorted.
 * @param {Function} selector - A function that extracts the value to sort by from each object.
 * @param {'asc' | 'desc'} direction - The direction to sort; either 'asc' for ascending or 'desc' for descending.
 * @returns {Array<Object>} - A new sorted array of employee objects, maintaining immutability.
 */
export const sortEmployees = (employees, selector, direction) => {
  return employees.sort((a, b) => {
    // Use the selector to resolve the field names for sorting
    const aField = selector(a);
    const bField = selector(b);

    let comparison = 0;

    // Check if the fields are valid dates
    const dateA = dayjs(aField);
    const dateB = dayjs(bField);

    if (dateA.isValid() && dateB.isValid()) {
      comparison = sortDate(dateA, dateB);
    } else {
      // If they are not dates, check their types
      if (typeof aField === 'number' && typeof bField === 'number') {
        comparison = sortNumber(aField, bField);
      } else if (typeof aField === 'string' && typeof bField === 'string') {
        comparison = sortString(aField, bField);
      }
    }
    // Return the comparison result, adjusted for the sort direction
    return direction === 'desc' ? comparison * -1 : comparison;
  });
};
