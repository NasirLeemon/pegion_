import React from 'react'
import { Link } from 'react-router-dom';
import "./services.css";

const ServiceItem = ({service}) => {

console.log(service );

  return (
    <>
    <Link to={`/services/${service?.id}`}>
      <div className=" serviceImageDiv growth" >
        <div className="serviceItemText">
          <h1 className="serviceItemTitle text-white">{service?.title}</h1>
          <h3 className="serviceItemDesc text-white">{service?.description}</h3>
        </div>
        <img src={service?.image} alt="" className='growth' />
      </div>
    </Link>
    </>
  )
}

export default ServiceItem