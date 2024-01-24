import { useEffect, useState } from "react";
import HouseCard from "../../components/Cards/HouseCard";
import { getAllHouses } from "../../api/Houses";
import LoadingSpinner from "../../components/Loading/Loading";

const ServicesHouse = () => {
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
        <div className="flex justify-center mb-5">
          <h2 className="relative text-2xl inline-block font-bold mb-4 after:absolute after:-bottom-2 after:left-0 after:w-full after:bg-pink-600 after:h-[2px]">
            Houses
          </h2>
        </div>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="grid grid-cols-4 gap-5">
            {services.slice(0, 8).map((house) => (
              <HouseCard key={house._id} house={house} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ServicesHouse;
