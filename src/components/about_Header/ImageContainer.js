import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ImageContainer = ({ imageSrc, title, linkTo }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const animationProps = {
    initial: {
      opacity: 0,
      scale: 0.5
    },
    animate: {
      opacity: inView ? 1 : 0,
      scale: inView ? 1 : 0.5
    },
    transition: {
      duration: 1.5,
      ease: [0.16, 1, 0.3, 1],
      scale: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        restDelta: 0.005
      }
    }
  };

  return (
    <motion.div className="image_container" ref={ref} {...animationProps}>
      <Link to={linkTo}>
        <div className="overlayed h-full w-full absolute"></div>
        <div className="image-wrapper-text growth">
          <h2>{title}</h2>
          <button>
            Learn More{" "}
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
        <div>
          <img src={imageSrc} alt="" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ImageContainer;
