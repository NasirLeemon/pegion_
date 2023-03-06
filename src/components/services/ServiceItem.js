import React from 'react'
import "./services.css";

const ServiceItem = ({service, setPopUp, foundService}) => {

    const handleClick = (id) => {
        setPopUp(true)
        foundService(id)
    }
  return (
    <>
   
      <div className=" serviceImageDiv growth" onClick={()=>handleClick(service.id)}>
        <div className="serviceItemText">
          <h1 className="serviceItemTitle text-white">{service?.title}</h1>
          <h3 className="serviceItemDesc text-white">{service?.description}</h3>
        </div>
        <img src={service?.image} alt="" className='growth' />
      </div>
    </>
  )
}

export default ServiceItem