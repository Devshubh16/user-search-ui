import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

/**
 * Fetch users based on search query (firstName, lastName, ssn)
 * @param {string} q - The search input
 * @returns {Promise<Array>} - List of matching users
 */
export const fetchUsers = async (q) => {
  if (!q || q.length < 3) return []; // Avoid unnecessary calls

  try {
    const response = await axios.get(`${API_BASE_URL}/search`, {
      params: { q },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

/**
 * Fetch user details by ID
 * @param {string} userId - The user ID
 * @returns {Promise<Object>} - User details
 */
export const fetchUserById = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
};
