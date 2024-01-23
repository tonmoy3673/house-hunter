import { Link } from "react-router-dom";

const HomeCard = ({ house }) => {
  return (
    <div className="w-full shadow-lg rounded">
      <Link
        to={`/house-details/${house.id}`}
        className="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt="house-img"
          className="object-cover object-center w-full h-full block"
          src={`https://d23e6qdu75bsi3.cloudfront.net/webpack/images/skyline-08-vegas-2dddf6f764f9375b4972.jpg`}
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
          <StarOutlineOutlined className="h-3 w-3 text-green-500" />
          <StarOutlineOutlined className="h-3 w-3 text-green-500" />
          <StarOutlineOutlined className="h-3 w-3 text-green-500" />
          <StarOutlineOutlined className="h-3 w-3 text-green-500" />
          <StarOutlineOutlined className="h-3 w-3 text-green-500" />
          <span>{house?.reviews} reviews</span>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
