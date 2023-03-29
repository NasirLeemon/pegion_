import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimateHeading = ({line, classes}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-50px 0px',
  });

  const sentenceVariants = {
    hidden : { opacity : 1},
    visible  : {
      opacity : 1,
      transition : {
        delay : 0.5,
        staggerChildren : 0.1
      },
    },
  };

  const letterVariants = {
    hidden : {
      opacity : 0, y : 50,
    },
    visible: {
      opacity : 1,
      y : 0
    },
  };

  return (
    <motion.h1
    
      ref={ref}
      variants={sentenceVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {line.split('').map((char, index) => {
        return (
          <motion.span className={`${classes}`} key={char + '-' + index} variants={letterVariants}>
            {char}
          </motion.span>
        );
      })}
    </motion.h1>
  );
};

export default AnimateHeading;
