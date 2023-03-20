import React from 'react'
import { useParams } from 'react-router-dom';
import './singleService.css'

const SingleService = ({services}) => {


    const { id } = useParams();
    const service = services.find(service => service.id === parseInt(id));
    console.log(service);
  return (
    <>
    <div className="serviceMain">
      <div className="serviceTitle">
        <h1>{service?.title}</h1>
      </div>
      <div className="serviceSingleItem grid grid-cols-1 gap-10">
        <div className="serviceItemImage">
          <img src={service?.image} alt={service?.title} />
        </div>
        <div className="serviceItemDescription">
          <p>{service?.description}</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default SingleService