import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/common/Navbar";
import { PreHeader } from "./components/common/PreHeader";
import { SubHeader } from "./components/common/SubHeader";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Help } from "./pages/Help";
import { SolarWater } from "./pages/SolarWater";
import { Footer } from "./components/common/Footer";

function App() {
  return (
    <>
      <PreHeader />
      <SubHeader />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solar-water" element={<SolarWater />} />
        <Route path="/help" element={<Help />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
