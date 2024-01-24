import {
  DoorBackOutlined,
  GpsFixedOutlined,
  KeyOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";

import { useLoaderData } from "react-router-dom";
import PrimaryButton from "../../components/Buttons/PrimaryButton";

const ServiceDetails = () => {
  const houseData = useLoaderData();
  const {
    _id,
    address,
    availabilityDate,
    bathrooms,
    bedrooms,
    city,
    description,
    name,
    phoneNumber,
    picture,
    rentPerMonth,
    roomSize,
  } = houseData.data;

  return (
    <div className="pt-20">
      <div className="flex gap-5 md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12">
        <div className="w-1/2 h-full overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-start h-[600px] w-full"
            src={picture}
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2 h-full overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-start h-[290px] w-full"
            src={picture}
          />
          <img
            alt="feature"
            className="object-cover object-start h-[290px] w-full"
            src={picture}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="md:flex justify-between sm:mx-10 md:mx-20 px-4 lg:mx-40 py-12">
        {/* Details */}
        <div className="flex-1 max-w-lg">
          <div>
            <div>
              <h2 className="text-gray-900 title-font text-xl mb-5 font-medium">
                {name}
              </h2>
              <h3 className="text-black text-base tracking-widest title-font mb-1 mt-1">
                {city} {" ,"} {address}
              </h3>
              <h3 className="text-gray-400 text-xs tracking-widest title-font mb-1 mt-1">
                {bedrooms < 10 ? `0${bedrooms}` : bedrooms} Bedrooms |{" "}
                {bathrooms < 10 ? `0${bathrooms}` : bathrooms} Bathrooms
              </h3>
            </div>
            <div>
              <div className="flex gap-1 mb-2">
                <StarBorderOutlined className="h4 w-4 text-pink-500" />{" "}
                <span>4.8 (10 reviews)</span>
              </div>
            </div>
          </div>
          <hr />
          <div>
            <div className="py-5 flex gap-5 items-center">
              <img
                alt=""
                referrerPolicy="no-referrer"
                className="w-16 h-16 border rounded-full"
                src={`https://i.ibb.co/DCzG2cp/christine-roy-ir5-MHI6r-Pg0-unsplash-1.jpg`}
              />
              <p>
                {`Host Name`} <br />2 days hosting
              </p>
            </div>
          </div>
          <hr />
          <div>
            <div className="flex flex-col items-start pb-4 my-2 mt-8 mx-auto max-w-7xl sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3">
                <DoorBackOutlined />
              </div>
              <div className="flex-grow prose sm:text-left prose-md">
                <p className="text-gray-500 text-xl">Self check-in</p>
                <p className="text-gray-400">
                  Check yourself in with the keypad.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3">
                <GpsFixedOutlined />
              </div>
              <div className="flex-grow prose sm:text-left prose-md">
                <p className="text-gray-500 text-xl">Great location</p>
                <p className="text-gray-400">
                  100% of recent guests gave the location a 5-star rating.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start pb-4 mx-auto my-2 max-w-7xl sm:flex-row">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 mt-1 text-neutral-600 rounded-full bg-gray-50 sm:mr-3">
                <KeyOutlined />
              </div>
              <div className="flex-grow prose sm:text-left prose-md">
                <p className="text-gray-500 text-xl">
                  Great check-in experience
                </p>
                <p className="text-gray-400">
                  100% of recent guests gave the check-in process a 5-star
                  rating.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-4 text-gray-500">{description}</div>
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/3 w-full h-full rounded shadow-lg">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-2">
            ${rentPerMonth}/ <span className="font-thin">Month</span>
          </h1>
          <div className="flex gap-1 mb-2">
            <StarBorderOutlined className="h4 w-4 text-pink-500" />{" "}
            <span>4.8 (10 reviews)</span>
          </div>

          <p>Dates</p>
          <div className="flex justify-between items-center p-2 border mt-1 mb-2">
            <div>{availabilityDate}</div>
          </div>

          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">
              ${rentPerMonth} x {1} month
            </span>
            <span className="ml-auto text-gray-900">${rentPerMonth}</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Cleaning Fee</span>
            <span className="ml-auto text-gray-900">$200</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Service Fee</span>
            <span className="ml-auto text-gray-900">$50</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-900 font-bold">Total</span>
            <span className="ml-auto text-gray-900">
              ${rentPerMonth + 200 + 50}
            </span>
          </div>
          <div className="mt-6 mb-2">
            <PrimaryButton
              type="submit"
              classes="w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md"
            >
              Reserve
            </PrimaryButton>
          </div>
          <p className="text-center text-gray-400 mb-6">
            You won't be charged yet!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
