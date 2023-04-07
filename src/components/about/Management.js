import React from "react";
import Profile from "./profile/Profile";
import "./profile/profile.css";
import "./management.css";
import { motion } from "framer-motion";

const Management = () => {
  const profileData = [
    {
      id: 1,
      title: "Former CEO",
      image: "/images/profile/chairman1.avif",
      name: "Name of Former CEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor olor sit amet consectetur adipisicing elit mollitia, Lorem ipsum dolor sit",
    },
    {
      id: 2,
      title: "CEO",
      image: "/images/profile/chairman2.avif",
      name: "Name of The CEO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor olor sit amet consectetur adipisicing elit mollitia, Lorem ipsum dolor sit",
    },
  ];

  return (
    <div className="managementMain">
      {profileData.map((profile) => (
        <motion.div
          initial={{
            opacity: 0,
            translateX: profile?.id % 2 === 0 ? -100 : 100,
            translateY: -100,
          }}
          animate={{
            opacity: 1,
            translateX: 0,
            translateY: 0,
          }}
          transition={{ duration: 0.5, delay: profile?.id * 0.2 }}
        >
          <Profile profile={profile} />
        </motion.div>
      ))}
    </div>
  );
};

export default Management;
