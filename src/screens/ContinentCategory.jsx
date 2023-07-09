import React from "react";
import { data } from "../data/data";
import Card from "../components/Card.jsx";

const ContinentCategory = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-3xl">Welcome To Trip Advisor</p>
      <p className="text-xl text-blue-600">
        Top Continents for your next Holiday
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {data.continents.map((continent) => (
          <Card item={continent} />
        ))}
      </div>
    </div>
  );
};

export default ContinentCategory;
