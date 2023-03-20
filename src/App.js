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
import { FaShippingFast } from "react-icons/fa";
import { IoAirplane } from 'react-icons/io5'
import {GiShipBow} from 'react-icons/gi'
import {FaWarehouse} from 'react-icons/fa'
import {IoSettingsSharp} from 'react-icons/io5'


function App() {

  const initialState = [
    {
      id: 1,
      title: "AIR FREIGHT",
      subTitle: "Air Feight is Easy",
      icon: <IoAirplane />,
      description: {
        title: "Hello",
        body: `is an expert in getting your freight by air and on its way. We know your time is as precious as your cargo. Offering a wide range of flexible, single-source air freight forwarding solutions & rates to meet your every needs. Pigeon Logistics hand-selected global network of dedicated partners provide comprehensive transportation services, our partners maintain the highest standards in performance, reliability and customer satisfaction. We ensure the benefit of our clients by following appropriate procedure. This will help us in delivering the cargo on time and at a reasonable competitive cost.`,
        items: [
          "Direct flights and dispatches.",
          "Consolidated air cargo.",
          "Door Delivery.",
          "DDU/DDP Shipments.",
          "Express air services.",
          "Trade Show & Exhibitions goods forwarding.",
          "Sea – Air combined services.",
        ],
      },
      image: "/images/services/air.jpg",
      image2: "/images/services/air2.jpg",

    },
    {
      id: 2,
      title: "TRUCKING SERVICE",
      subTitle: "Trucking is Easy",
      icon: <FaShippingFast />,

      description: {
        title: "Hello",
        body: " is an expert in getting your freight by air and on its way. We know your time is as precious as your cargo. Offering a wide range of flexible, single-source air freight forwarding solutions & rates to meet your every needs. Pigeon Logistics hand-selected global network of dedicated partners provide comprehensive transportation services, our partners maintain the highest standards in performance, reliability and customer satisfaction. We ensure the benefit of our clients by following appropriate procedure. This will help us in delivering the cargo on time and at a reasonable competitive cost.",
        items: [
          "Direct flights and dispatches.",
          "Consolidated air cargo.",
          "Door Delivery.",
          "DDU/DDP Shipments.",
          "Express air services.",
          "Trade Show & Exhibitions goods forwarding.",
          "Sea – Air combined services.",
        ],
      },
      image: "/images/services/truck.jpg",
      image2: "/images/services/truck2.jpg",

    },
    {
      id: 3,
      title: "OCEAN FREIGHT",
      subTitle: "Ocean Feight is Easy",
      icon: <GiShipBow />,
      description: {
        title: "Hello",
        body: " has wide experience and exposure to meet your global ocean freight needs. We offer both FCL and LCL service with a wide choice of ocean carriers. Our good relationship with  shipping lines provides us with a gain of an extensive selection of sailing schedules to and from all major ports around the globe.",
        items: [
          "Full container load ( FCL)",
          "Less than container load (LCL)",
          "Inland transport to CIS Destination",
          "Heavy / Bulk / OOG Project cargo",
          "Provision of special containers (High Cube, Open Top, Flat Rack )",
        ],
      },
      image: "/images/services/ship.jpg",
      image2: "/images/services/ship2.jpg",

    },
    {
      id: 4,
      title: "CUSTOM CLEARANCE",
      subTitle: "Easy Custom Clearance ",
      icon : <IoSettingsSharp />,
      description: {
        title: "Hello",
        body: " is an expert in getting your freight by air and on its way. We know your time is as precious as your cargo. Offering a wide range of flexible, single-source air freight forwarding solutions & rates to meet your every needs. Pigeon Logistics hand-selected global network of dedicated partners provide comprehensive transportation services, our partners maintain the highest standards in performance, reliability and customer satisfaction. We ensure the benefit of our clients by following appropriate procedure. This will help us in delivering the cargo on time and at a reasonable competitive cost.",
        items: [
          "Direct flights and dispatches.",
          "Consolidated air cargo.",
          "Door Delivery.",
          "DDU/DDP Shipments.",
          "Express air services.",
          "Trade Show & Exhibitions goods forwarding.",
          "Sea – Air combined services.",
        ],
      },
      image: "/images/services/custom.jpg",
      image2: "/images/services/custom2.jpg",

      
    },
    {
      id: 5,
      title: "WEARHOUSE",
      subTitle: "Easy Wearhouse Access",
      icon: <FaWarehouse />,
      description: {
        title: "Hello",
        body: " is an expert in getting your freight by air and on its way. We know your time is as precious as your cargo. Offering a wide range of flexible, single-source air freight forwarding solutions & rates to meet your every needs. Pigeon Logistics hand-selected global network of dedicated partners provide comprehensive transportation services, our partners maintain the highest standards in performance, reliability and customer satisfaction. We ensure the benefit of our clients by following appropriate procedure. This will help us in delivering the cargo on time and at a reasonable competitive cost.",
        items: [
          "Direct flights and dispatches.",
          "Consolidated air cargo.",
          "Door Delivery.",
          "DDU/DDP Shipments.",
          "Express air services.",
          "Trade Show & Exhibitions goods forwarding.",
          "Sea – Air combined services.",
        ],
      },
      image: "/images/services/wearhouse.jpg",
      image2: "/images/services/warehouse2.jpg",

    },
  ];
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about" element={<AboutHeader />} />
        <Route path="/company" element={<About />} />
        <Route
          path="/services"
          element={<Services services={initialState} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/services/:id"
          element={<SingleService services={initialState} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
