import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000"; // Replace with your backend server URL

export const SearchForm = () => {
  const [houses, setHouses] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    minBedrooms: 0,
    minBathrooms: 0,
    minSize: 0,
    availability: "",
    rentRange: [0, Infinity],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch houses from the backend when the component mounts
    fetchHouses();
  }, []);

  const fetchHouses = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/houses`, {
        params: filters,
      });
      setHouses(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching houses:", error);
      setError("Error fetching houses. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (filter, value) => {
    setFilters({ ...filters, [filter]: value });
  };

  const handleSearch = () => {
    fetchHouses();
  };
  return (
    <div>
      <form className="max-w-md mx-auto p-4 bg-white rounded shadow-lg">
        <h1 className="text-2xl font-bold mb-4">House Search App</h1>

        <div className="mb-4">
          <label
            htmlFor="city"
            className="block text-sm font-semibold text-gray-600"
          >
            City:
          </label>
          <input
            type="text"
            id="city"
            value={filters.city}
            onChange={(e) => onFilterChange("city", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="minBedrooms"
            className="block text-sm font-semibold text-gray-600"
          >
            Minimum Bedrooms:
          </label>
          <input
            type="number"
            id="minBedrooms"
            value={filters.minBedrooms}
            onChange={(e) => onFilterChange("minBedrooms", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="minBathrooms"
            className="block text-sm font-semibold text-gray-600"
          >
            Minimum Bathrooms:
          </label>
          <input
            type="number"
            id="minBathrooms"
            value={filters.minBathrooms}
            onChange={(e) => onFilterChange("minBathrooms", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="minSize"
            className="block text-sm font-semibold text-gray-600"
          >
            Minimum Size:
          </label>
          <input
            type="number"
            id="minSize"
            value={filters.minSize}
            onChange={(e) => onFilterChange("minSize", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="availability"
            className="block text-sm font-semibold text-gray-600"
          >
            Availability:
          </label>
          <select
            id="availability"
            value={filters.availability}
            onChange={(e) => onFilterChange("availability", e.target.value)}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
          >
            <option value="">All</option>
            <option value="true">Available</option>
            <option value="false">Not Available</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="rentRange"
            className="block text-sm font-semibold text-gray-600"
          >
            Rent Range:
          </label>
          <div className="flex">
            <input
              type="number"
              id="rentRangeMin"
              value={filters.rentRange[0]}
              onChange={(e) =>
                onFilterChange("rentRange", [
                  e.target.value,
                  filters.rentRange[1],
                ])
              }
              className="w-1/2 p-2 mr-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
            <span className="text-gray-700"> - </span>
            <input
              type="number"
              id="rentRangeMax"
              value={filters.rentRange[1]}
              onChange={(e) =>
                onFilterChange("rentRange", [
                  filters.rentRange[0],
                  e.target.value,
                ])
              }
              className="w-1/2 p-2 ml-2 border border-gray-300 rounded focus:outline-none focus:border-green-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <SearchResultList houses={houses} />}
    </div>
  );
};

const SearchResultList = ({ houses }) => {
  return (
    <div>
      <h2>Search Results:</h2>
      <ul>
        {houses.map((house, index) => (
          <li key={index}>
            <p>{`City: ${house.city}, Bedrooms: ${house.bedrooms}, Bathrooms: ${house.bathrooms}, Size: ${house.size}, Availability: ${house.availability}, Rent: ${house.rent}`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
