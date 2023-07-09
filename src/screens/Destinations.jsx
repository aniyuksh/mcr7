import React from "react";
import Card from "../components/Card";

const Destinations = () => {
  let country = {};
  const { id: continentId } = useParams();

  useEffect(() => {
    country = data.countries.find((country) => country.id === continentId);
  }, [continentId]);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl text-blue-600">
        Top Destinations in {country.name} for your next Holiday
      </p>
      <div>
        <div className="flex flex-wrap gap-4 justify-center">
          {country.destinations.map((destination) => (
            <Card key={destination.id} item={destination} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
