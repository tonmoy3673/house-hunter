import { StarOutlineOutlined } from "@mui/icons-material";

import { Link } from "react-router-dom";

const HouseCard = ({ house }) => {
  return (
    <div className="w-full shadow-lg rounded">
      <Link
        to={`/houses-details/${house._id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="house-img"
          className="object-cover object-center w-full h-full block"
          src={house?.picture}
        />
      </Link>
      <div className="mt-4 p-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {house?.address}, {house?.city}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {house?.name}
        </h2>
        <p className="mt-1">${house?.rentPerMonth} per month</p>
        <div className="flex mt-1">
          <StarOutlineOutlined className="h-3 w-3 text-pink-500" />
          <StarOutlineOutlined className="h-3 w-3 text-pink-500" />
          <StarOutlineOutlined className="h-3 w-3 text-pink-500" />
          <StarOutlineOutlined className="h-3 w-3 text-pink-500" />
          <StarOutlineOutlined className="h-3 w-3 text-pink-500" />
        </div>
      </div>
    </div>
  );
};

export default HouseCard;
