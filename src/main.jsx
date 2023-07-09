import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ContinentCategory from "./screens/ContinentCategory.jsx";
import CountryCategory from "./screens/CountryCategory.jsx";
import Destinations from "./screens/Destinations.jsx";
import DestinationDetail from "./screens/DestinationDetail.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<ContinentCategory />}>
      {/* <Route index={true} path="/" element={<ContinentCategory />} /> */}
      <Route path="/CountryCategory/:id" element={<CountryCategory />} />
      <Route path="/Destinations/:id" element={<Destinations />} />
      <Route path="/DestinationDetails/:id" element={<DestinationDetail />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
