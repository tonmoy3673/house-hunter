import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { register } from "../../api/user";
import { AuthContext } from "../../contexts/AuthProvider";

const SignupPage = () => {
  const { createUser } = useContext(AuthContext);

  const initialFormData = {
    fullName: "",
    role: "",
    phoneNumber: "",
    email: "",
    password: "",
    imageUrl:
      "https://www.iconpacks.net/icons/1/free-user-login-icon-305-thumb.png",
  };
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from.pathname || "/dashboard";

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate each field
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    if (!formData.role) {
      newErrors.role = "Role is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else {
      // Password validation
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (!passwordRegex.test(formData.password)) {
        newErrors.password =
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.";
      }
    }

    setErrors(newErrors);

    // Return true if the form is valid, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      createUser(formData.email, formData.password)
        .then((result) => {
          register(formData);
          navigate(from, { replace: true });
          setFormData(initialFormData);
        })
        .catch((error) => {
          // Handle registration error
          console.error("Registration error:", error);
        });
    }
  };

  return (
    <div className="container mx-auto pt-20 mb-20">
      <div className="p-8 mx-auto lg:w-6/12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md px-8 pb-20 pt-10 mb-4 max-w-md mx-auto"
        >
          <h1 className="text-2xl font-semibold text-center mb-10">Sign Up</h1>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="fullName"
            >
              Full Name:
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-xs italic">{errors.fullName}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role:
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.role ? "border-red-500" : ""
                }`}
              >
                <option value="">Select Role</option>
                <option value="House Owner">House Owner</option>
                <option value="House Renter">House Renter</option>
              </select>
              {errors.role && (
                <p className="text-red-500 text-xs italic">{errors.role}</p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number:
              <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.phoneNumber ? "border-red-500" : ""
                }`}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs italic">
                  {errors.phoneNumber}
                </p>
              )}
            </label>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email:
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">{errors.email}</p>
              )}
            </label>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password:
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs italic">{errors.password}</p>
              )}
            </label>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="mr-5 text-blue-500">
            <button className="rounded-full px-2 py-1">Login</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
