import React from 'react'
import { motion } from 'framer-motion'
const Achievements = () => {
  return (
    <motion.div
    
    initial={{ x: "-100%" }}
    animate={{ x: 0 }}
    exit={{ x: "100%" }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <img className='p-5' src='/images/achievements.jpg' alt='achievements'/>
    </motion.div>
  )
}

export default Achievements