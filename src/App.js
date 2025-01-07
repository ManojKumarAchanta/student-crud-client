import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <div className="text-md md:text-lg lg:text-lg xl:text-lg">
      <Toaster />
      <Navbar />
      <Routes>
        <Route path="/uploadDetails" element={<Upload />} />
        <Route path="/" element={<Home />} />
        <Route path="/getDetails" element={<Upload />} />
      </Routes>
    </div>
  );
};

export default React.memo(App);
