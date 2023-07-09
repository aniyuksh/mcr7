import React from "react";
import ContinentCategory from "./screens/ContinentCategory";
import CountryCategory from "./screens/CountryCategory";
import { data } from "./data/data";
import Destinations from "./screens/Destinations";
import DestinationDetail from "./screens/DestinationDetail";

const App = () => {
  return (
    <div>
      {/* <ContinentCategory /> */}
      {/* <CountryCategory continent={data.continents[1]} /> */}
      {/* <Destinations country={data.continents[1].countries[1]} /> */}
      {/* <DestinationDetail
        destination={data.continents[1].countries[1].destinations[1]}
      /> */}
    </div>
  );
};

export default App;
