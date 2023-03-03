import React from "react";
import "./history.css";
const History = () => {
  return (
    <div className="history-main">
      <div className="historyTitle">
        <h3 className="font-bold">Our History</h3>
      </div>
      <div className="historyContent">
         <div className="history-imgDiv">
          <img
            className="history-img"
            src="/images/photos/history.avif"
            alt="History Pigeon"
          />
         </div>
         <div className="history-textDiv">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,
          </h5>
          <h6>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, Lorem ipsum dolor sit
            olor sit amet consectetur adipisicing elit. Maxime
            mollitia, Lorem ipsum dolor sit
            olor sit amet consectetur adipisicing elit. Maxime
            mollitia, Lorem ipsum dolor sit
          </h6>
        </div>
      </div>
    </div>
  );
};

export default History;
