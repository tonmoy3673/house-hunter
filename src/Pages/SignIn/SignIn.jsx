import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { login } from "../../api/user";
import { AuthContext } from "../../contexts/AuthProvider";

const SigninPage = () => {
  const { signin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const [errors, setErrors] = useState({});

  const from = location?.state?.from.pathname || "/dashboard";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Return true if the form is valid, false otherwise
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Clear the error message when the user starts typing
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleTogglePassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await signin(formData.email, formData.password);
        navigate(from, { replace: true });
        const data = {
          email: formData.email,
          password: formData.password,
        };
        login(data);
      } catch (error) {
        console.error("Login failed:", error);
        setErrors((prevErrors) => ({
          ...prevErrors,
          general: "Invalid credentials. Please try again.",
        }));
      }
    }
  };

  return (
    <div className="container mx-auto pt-20 mb-20">
      <div className="p-8 mx-auto lg:w-6/12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md px-8 pb-20 pt-10 mb-4 max-w-md mx-auto"
        >
          <h1 className="text-2xl font-semibold text-center mb-10">Sign In</h1>
          {errors.general && (
            <p className="text-red-500 text-xs italic mb-3">{errors.general}</p>
          )}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-3"
              htmlFor="email"
            >
              Email:
              <input
                type="email"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Email"
                required
                value={formData.email}
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.email}
                </p>
              )}
            </label>
          </div>
          <div className="relative mb-4">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="password"
            >
              Password:
              <input
                type={formData.showPassword ? "text" : "password"}
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? "border-red-500" : ""
                }`}
                placeholder="Password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
              <button
                type="button"
                onClick={handleTogglePassword}
                className="absolute right-3 top-6"
              >
                {formData.showPassword ? (
                  <VisibilityOffIcon />
                ) : (
                  <VisibilityIcon />
                )}
              </button>
            </label>
            {errors.password && (
              <p className="text-red-500 text-xs italic mt-1">
                {errors.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/create-account" className="mr-5 text-blue-500">
            <button className="rounded-full px-2 py-1">Signup</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
