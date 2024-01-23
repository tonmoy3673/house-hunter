import { useState } from "react";

// const API_URL = "http://localhost:5000"; // Replace with your backend server URL

export const SearchForm = () => {
  const [formData, setFormData] = useState({
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
    availabilityDate: "",
    rentPerMonth: "",
    rentRange: ["", ""],
  });

  const handleChange = (name, value) => {
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-2/4 mx-auto px-4 py-6 bg-white rounded shadow-lg backdrop-filter"
      >
        <h1 className="text-2xl font-bold mb-4 text-center">
          House Search App
        </h1>

        <div className="flex justify-between gap-5">
          <div className="mb-4 lg:w-1/3">
            <label
              htmlFor="city"
              className="block text-sm font-semibold text-gray-600"
            >
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="mb-4 lg:w-1/3">
            <label
              htmlFor="bedrooms"
              className="block text-sm font-semibold text-gray-600"
            >
              Minimum Bedrooms:
            </label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={(e) => handleChange("bedrooms", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="mb-4 lg:w-1/3">
            <label
              htmlFor="bathrooms"
              className="block text-sm font-semibold text-gray-600"
            >
              Minimum Bathrooms:
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={(e) => handleChange("bathrooms", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        <div className="flex justify-between gap-5">
          <div className="mb-4 lg:w-1/2">
            <label
              htmlFor="roomSize"
              className="block text-sm font-semibold text-gray-600"
            >
              Minimum Size:
            </label>
            <input
              type="number"
              id="roomSize"
              name="roomSize"
              value={formData.roomSize}
              onChange={(e) => handleChange("roomSize", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            />
          </div>

          <div className="mb-4 lg:w-1/2">
            <label
              htmlFor="availabilityDate"
              className="block text-sm font-semibold text-gray-600"
            >
              Availability:
            </label>
            <select
              id="availabilityDate"
              name="availabilityDate"
              value={formData.availabilityDate}
              onChange={(e) => handleChange("availabilityDate", e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            >
              <option value="">All</option>
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>
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
              name="rentRangeMin"
              value={formData.rentRange[0]}
              onChange={(e) =>
                handleChange("rentRange", [
                  e.target.value,
                  formData.rentRange[1],
                ])
              }
              className="w-1/2 p-2 mr-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            />
            <span className="text-gray-700"> - </span>
            <input
              type="number"
              id="rentRangeMax"
              name="rentRangeMax"
              value={formData.rentRange[1]}
              onChange={(e) =>
                handleChange("rentRange", [
                  formData.rentRange[0],
                  e.target.value,
                ])
              }
              className="w-1/2 p-2 ml-2 border border-gray-300 rounded focus:outline-none focus:border-pink-500"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full p-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition duration-300"
        >
          Search
        </button>
      </form>
    </div>
  );
};
