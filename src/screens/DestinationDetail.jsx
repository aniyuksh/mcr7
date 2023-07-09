import React from "react";

const DestinationDetail = ({ destination }) => {
  return (
    <div>
      <p>{destination.name}</p>
      <div>
        <img
          src={destination.image}
          alt={destination.name}
          className="h-[25rem] w-[25rem]"
        />

        <div>
          <p>Description: {destination.description}</p>
          <p>Ratings: {destination.ratings}</p>
          <p>Reviews: {destination.reviews}</p>
          <p>Location: {destination.location}</p>
          <p>Opening Hours: {destination.openingHours}</p>
          <p>Ticket Price: {destination.ticketPrice}</p>
          <p href={destination.website}>Website</p>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetail;
