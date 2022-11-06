import React from "react";
import "../css/res-cards.css";

export default function resCards() {
  return (
    <>
      <div className="rec">
        <div className="rec-img">
          <img alt="idcon" src={require("../images/brevet.png")}></img>
        </div>
        <div className="rec-vals">
          <div className="rec-name">
            <span>5.00 ETH</span>
          </div>
          <div className="rec-val">
            <span>0xCb19180B1D34eFDfd02899C21Feff15998bA1687</span>
          </div>
        </div>
      </div>
    </>
  );
}
