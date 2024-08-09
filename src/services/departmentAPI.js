import axios from 'axios';

/**
 * Function to fetch departments data from a local JSON file.
 * @returns {Promise<Object>} - Promise resolving to an array of departments
 * @throws {Error} - Throws an error if no department founded
 */
export const getDepartments = async () => {
  try {
    const res = await axios.get(window.location.origin + '/departments.json');
    const datas = res.data;

    if (!datas) {
      throw new Error('Departments not found');
    }

    return datas;
  } catch (error) {
    throw new Error(error);
  }
};
