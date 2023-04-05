import React from 'react'
import { CircleLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className="loader-container h-[100vh] w-[100vw] text-center flex justify-center items-center">
          <div>
          <CircleLoader color="#053e6c" size={100} />
          </div>
        </div>
      );
}


export default Loader
