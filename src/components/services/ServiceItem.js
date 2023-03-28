import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import "./services.css";
import { useInView,motion } from 'framer-motion';

const ServiceItem = ({service}) => {

  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    console.log("Element is in view: ", isInView)
  }, [isInView])

  return (
    <motion.div
    ref={ref}
    initial={{opacity: 0, translateX: service?.id % 2 === 0 ? -100 : 100 , translateY : -100 }}
    animate={{opacity : 1, translateX : 0, translateY : 0}}
    transition={{duration : 0.3, delay : service?.id * 0.3}}
    >
    <Link to={`/services/${service?.id}`}>
      <div className=" serviceImageDiv growth" >
        <div className="serviceItemText">
          <h1 className="serviceItemTitle text-white">{service?.title}</h1>
          <h3 className="serviceItemDesc text-white">{service?.subTitle}</h3>
        </div>
        <img src={service?.image} alt="" className='growth' />
      </div>
    </Link>
    </motion.div>
  )
}

export default ServiceItem