/**
 * Compares two Day.js date objects and returns a comparison value.
 *
 * @param {dayjs} dateA - The first date to compare.
 * @param {dayjs} dateB - The second date to compare.
 * @returns {number} - Returns -1 if dateA is before dateB,
 *                     1 if dateA is after dateB,
 *                     and 0 if they are equal.
 */
const sortDate = (dateA, dateB) => {
  return dateA.isBefore(dateB) ? -1 : dateA.isAfter(dateB) ? 1 : 0;
};

/**
 * Compares two numbers and returns a comparison value.
 *
 * @param {number} numA - The first number to compare.
 * @param {number} numB - The second number to compare.
 * @returns {number} - Returns a negative value if numA is less than numB,
 *                     a positive value if numA is greater than numB,
 *                     and 0 if they are equal.
 */
const sortNumber = (numA, numB) => {
  return numA - numB;
};

/**
 * Compares two strings and returns a comparison value, case-insensitively.
 *
 * @param {string} stringA - The first string to compare.
 * @param {string} stringB - The second string to compare.
 * @returns {number} - Returns a negative value if stringA comes before stringB,
 *                     a positive value if stringA comes after stringB,
 *                     and 0 if they are equal.
 */
const sortString = (stringA, stringB) => {
  return stringA.toLowerCase().localeCompare(stringB.toLowerCase());
};

export { sortDate, sortNumber, sortString };
