import { useEffect, useState } from "react";
import HouseCard from "../Cards/HouseCard";
import { getAllHouses } from "../../api/Houses";
import PrimaryButton from "../Buttons/PrimaryButton";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Loading/Loading";

const Houses = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const response = await getAllHouses();
        setServices(response);
        setLoading(false);
      } catch (error) {
        console.error("Error posting house:", error);
      }
    };
    getHouses();
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <h2 className="relative text-2xl inline-block font-bold mb-4 after:absolute after:-bottom-2 after:left-0 after:w-full after:bg-pink-600 after:h-[2px]">
          Houses
        </h2>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-4 gap-5">
            {services.slice(0, 8).map((house) => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <PrimaryButton classes={`px-6 py-2 rounded-md`}>
            <Link to="/houses">See More</Link>
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Houses;
