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
          <h5>THE COMPANY</h5>
          <h6>
            <span className="font-bold">PIGEON LOGISTICS</span> was established
            in 2005. The office is located at the heart of Dhaka, the capital
            city of Bangladesh.
            <br />
            <p className="mt-2">
              PL is the freight-forwarding company, formed with the sole
              objective of specializing in International Freight Forwarding
              activities. PL selves is engaged in diverse shipping related
              activities in Bangladesh providing FCL & LCL consolidation to
              worldwide via Transshipment and door delivery service to CIS
              destinations and special import and export project cargo handling
              and inland haulage.
            </p>
            <p className="mt-2">
              PL enjoys reputation within both the local and overseas customers
              for delivering quality freight forwarding services. PL has
              excellent airfreight handling exposure & has secured many leading
              customers, working exclusively with the Company.
            </p>
            <p className="mt-2">
              We have taken the opportunity to re-evaluate our entire operations
              in the light of the changing global economic situation and that we
              have positioned as customer driven organization with superior
              services and a professional approach to the transport business,
              which is unique of its nature in the country.
            </p>
            <p className="mt-2">
              Clearly, we are in a competitive industry but PL is fully
              committed as an International Freight Forwarding Company offering
              specialized OCEAN FREIGHT & AIR FREIGHT services. We remain a
              customer driven organization but our role extends to that of
              advisors and business partners to our customers and we are
              committed to developing long term relationship built on trust and
              mutual respect.
            </p>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default History;
