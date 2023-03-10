import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Services from "./components/services/Services";
import AboutHeader from "./components/about_Header/AboutHeader";
import Contact from "./components/contact_us/Contact";
import SingleService from "./components/service_items/SingleService";


function App() {

  const initialState = [
    {
        id: 1,
        title: "AIR FREIGHT",
        description: "Air Feight is Easy",
        image: "/images/services/air.jpg",
      },
      {
        id: 2,
        title: "TRUCKING SERVICE",
        description: "Trucking is Easy",
        image: "/images/services/truck.jpg",
      },
      {
        id: 3,
        title: "OCEAN FREIGHT",
        description: "Ocean Feight is Easy",
        image: "/images/services/ship.jpg",
      },
      {
        id: 4,
        title: "CUSTOM CLEARANCE",
        description: "Easy Custom Clearance ",
        image: "/images/services/custom.jpg",
      },
      {
        id: 5,
        title: "WEARHOUSE",
        description: "Easy Wearhouse Access",
        image: "/images/services/wearhouse.jpg",
      },
]
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<AboutHeader />} />
        <Route path="/company" element={<About />} />
        <Route exact path="/services" element={<Services services={initialState}/>} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services/:id" element={<SingleService services={initialState}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
