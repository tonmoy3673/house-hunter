import { useState } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    console.log(email, password);
    // try {
    //   const response = await axios.post('http://localhost:5000/login', formData);
    //   const token = response.data.token;
    //   console.log('Login successful, token:', token);
    //   // Store the token in localStorage or a secure storage mechanism
    //   // Redirect to the dashboard or handle success accordingly
    // } catch (error) {
    //   console.error('Login failed', error.response.data.message);
    // }
  };
  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="p-8 mx-auto lg:w-6/12">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 shadow-md px-8 pb-20 pt-10 mb-4 max-w-md mx-auto"
        >
          <h1 className="text-2xl font-semibold text-center mb-10">Sign In</h1>
          <label
            className="block text-gray-700 text-sm font-bold mb-3"
            htmlFor="fullName"
          >
            Email:
            <input
              type="email"
              className="w-full border p-2 mb-4 rounded"
              placeholder="Email"
              required
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
          </label>
          <div className="relative">
            <label
              className="block text-gray-700 text-sm font-bold"
              htmlFor="fullName"
            >
              Password:
              <input
                type={formData.showPassword ? "text" : "password"}
                className="w-full border p-2 mb-4 rounded"
                placeholder="Password"
                required
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
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
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Sign In
          </button>
        </form>
        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link to="/create-account" className="mr-5 text-blue-500">
            <button className="rounded-full px-2 py-1">Signup</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
