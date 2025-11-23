import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    setLoading(true);
    setError("");
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError("Looks like we can't find the user");
    }

    setLoading(false);
  };

  return (
    <div style={{ marginTop: "20px" }}>
      {/* Search Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            marginRight: "10px",
          }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p>Loading...</p>}

      {/* Error */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* User Result */}
      {userData && (
        <div style={{ marginTop: "20px" }}>
          <img
            src={userData.avatar_url}
            alt="Avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{userData.name || userData.login}</h2>
          <a href={userData.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}

export default Search;
