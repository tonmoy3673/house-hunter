import { useEffect, useState } from "react";
import PrimaryButton from "../Buttons/PrimaryButton";
import { formatDate } from "date-fns";

const UpdateHouse = ({ onClose, house, updateData }) => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    bedrooms: "",
    bathrooms: "",
    roomSize: "",
    picture: "",
    availabilityDate: "",
    rentPerMonth: "",
    phoneNumber: "",
    description: "",
  });

  const date = new Date(house?.availabilityDate);
  const formattedDate = formatDate(date, "yyyy-MM-dd");

  useEffect(() => {
    if (house) {
      setFormData(house);
    }
  }, [house]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateData(house?._id, formData);
    onClose();
  };

  return (
    <div className="bg-white p-8 rounded shadow-md w-1/2">
      <div className="flex justify-end">
        <button
          className="bg-red-500 w-10 h-10 rounded-full p-2 text-white"
          onClick={onClose}
        >
          X
        </button>
      </div>
      <h2 className="text-2xl font-bold text-center mb-4">Update House</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="flex gap-5 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-600"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 w-1/2">
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-600"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-5 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="bedrooms"
              className="block text-sm font-medium text-gray-600"
            >
              Bedrooms
            </label>
            <input
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4 w-1/2">
            <label
              htmlFor="roomSize"
              className="block text-sm font-medium text-gray-600"
            >
              Room Size
            </label>
            <input
              type="number"
              id="roomSize"
              name="roomSize"
              value={formData.roomSize}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-5 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="bathrooms"
              className="block text-sm font-medium text-gray-600"
            >
              Bathrooms
            </label>
            <input
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="availabilityDate"
              className="block text-sm font-medium text-gray-600"
            >
              Availability Date
            </label>
            <input
              type="date"
              id="availabilityDate"
              name="availabilityDate"
              value={formattedDate}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="flex gap-5 justify-between">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="rentPerMonth"
              className="block text-sm font-medium text-gray-600"
            >
              Rent Per Month
            </label>
            <input
              type="number"
              id="rentPerMonth"
              name="rentPerMonth"
              value={formData.rentPerMonth}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-600"
            >
              Phone Number (Bangladeshi)
            </label>
            <input
              type="tel"
              pattern="(\+880|0)(\d{9}\d{1})"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            htmlFor="picture"
            className="block text-sm font-medium text-gray-600"
          >
            Picture URL
          </label>
          <input
            type="url"
            id="picture"
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-600"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:border-blue-500"
            rows="4"
          ></textarea>
        </div>

        <PrimaryButton
          type="submit"
          classes="block w-full rounded-lg items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform"
        >
          <span className="mx-4 font-medium">Update House</span>
        </PrimaryButton>
      </form>
    </div>
  );
};

export default UpdateHouse;
