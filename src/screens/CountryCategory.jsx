import React, { useEffect } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { data } from "../data/data";

const CountryCategory = () => {
  let continent = {};
  const { id: continentId } = useParams();

  useEffect(() => {
    continent = data.continents.find(
      (continent) => continent.id === continentId
    );
  }, [continentId]);

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl text-blue-600">
        Top Countries in {continent.name} for your next Holiday
      </p>
      <div>
        <div className="flex flex-wrap gap-4 justify-center">
          {continent.countries.map((continent) => (
            <Card key={continent.id} item={continent} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryCategory;
