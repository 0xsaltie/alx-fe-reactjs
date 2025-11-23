import { useState } from "react";
import { fetchUserData } from "../services/githubService";


function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setResults([]);

    try {
      const data = await searchUsers({ username, location, minRepos, page: 1 });
      setResults(data.items);
      setPage(1);
    } catch (err) {
      setError("Looks like we cant find the user");
    }

    setLoading(false);
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);

    const data = await fetchUserData(username);
({
      username,
      location,
      minRepos,
      page: nextPage
    });

    setResults((prev) => [...prev, ...data.items]);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-bold mb-4">Advanced GitHub User Search</h2>

      {/* Search Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Username (optional)"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />

        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-3 py-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Loading */}
      {loading && <p className="text-center mt-4">Loading...</p>}

      {/* Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center gap-4 p-3 border rounded"
            >
              <img
                src={user.avatar_url}
                alt="avatar"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="font-bold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  className="text-blue-600 underline"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}

          {/* Load More */}
          <button
            onClick={loadMore}
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-black"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default Search;
