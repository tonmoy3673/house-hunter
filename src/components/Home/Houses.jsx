import { useEffect, useState } from "react";
import HomeCard from "../Cards/HomeCard";

const Houses = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("houses.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error fetching services:", error));
  }, []);

  console.log(services);

  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-5">
          {services.map((house) => (
            <HomeCard key={house.id} house={house} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;
