import React from "react";
import Navbar from "../page-assets/Navbar";
import { Outlet } from "react-router-dom";
import Fotter from "../page-assets/Fotter";

function Sharedlayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Fotter />
    </div>
  );
}

export default Sharedlayout;
