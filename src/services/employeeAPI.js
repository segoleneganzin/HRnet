import axios from 'axios';

/**
 * Function to fetch employees data from a local JSON file.
 * @returns {Promise<Object>} - Promise resolving to an array of employees
 * @throws {Error} - Throws an error if no employee founded
 */
export const getEmployees = async () => {
  try {
    const res = await axios.get(window.location.origin + '/employees.json');
    const datas = res.data;
    if (!datas) {
      throw new Error('No employee found');
    }
    return { body: datas };
  } catch (error) {
    throw new Error(error);
  }
};