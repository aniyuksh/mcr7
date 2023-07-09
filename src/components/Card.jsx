import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link
      to={
        item.countries
          ? `/CountryCategory/${item.id}`
          : item.destinations
          ? `/Destinations/${item.id}`
          : `/DestinationDetails/${item.id}`
      }
    >
      <div className="relative">
        <img
          src={item.image}
          alt="item.name"
          className="h-[15rem] w-[15rem] rounded-md"
        />
        <p className="absolute bottom-2 left-2 text-white">{item.name}</p>
      </div>
    </Link>
  );
};

export default Card;
