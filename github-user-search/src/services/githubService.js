import axios from "axios";

export const searchUsers = async ({ username, location, minRepos, page }) => {
  const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos} `;

  const url = `https://api.github.com/search/users?q=${encodeURIComponent(
    query
  )}&page=${page}&per_page=10`;

  const headers = token ? { Authorization: `token ${token}` } : {};

  const response = await axios.get(url, { headers });
  return response.data;
};
