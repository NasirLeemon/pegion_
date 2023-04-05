import React from 'react';
import { motion } from 'framer-motion';
import { careersData } from './data';


const Career = () => {
  return (
    <motion.div className="bg-gray-100 min-h-screen"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    exit={{ x: window.innerWidth, transition: { duration: 0.4 } }}
    >
      <div
        className="bg-cover bg-center h-64 flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('/images/background.png')` }}
      >
        <h1 className=" text-4xl pt-10 md:pt-20 md:text-7xl font-bold mb-4">Join Our Team</h1>
        <p className="text-lg">We're always looking for talented individuals to join us</p>
      </div>
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-8">Current Job Openings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careersData && careersData.map((career) => (
            <motion.div
              key={career.id}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-between"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {career.icon}
              <h2 className="text-xl font-bold mb-4">{career.title}</h2>
              <p className="mb-4">{career.description}</p>
              <button className="bg-maincolor hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};



export default Career;
