import "../css/research.css";
import ResCards from "./res-cards";

export default function research() {
  return (
    <>
      <div className="res-main">
        <div className="res-head">
          <span className="heading">Research Helper</span>
          <span className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </span>
        </div>
        <div className="res-tokens">
          <div className="res-token">
            <div className="res-token-content">
              <div className="res-token-val">
                <span>5.00</span>
              </div>
              <div className="res-token-curr">
                <span>ETH</span>
              </div>
            </div>
            <div className="res-token-content1">
              <img alt="gg" src={require("../images/nft-1.avif")}></img>
            </div>
          </div>
          <div className="res-token">
            <div className="res-token-content">
              <div className="res-token-val">
                <span>5.00</span>
              </div>
              <div className="res-token-curr">
                <span>ETH</span>
              </div>
            </div>
            <div className="res-token-content1"></div>
          </div>
        </div>
        <div className="res-table">
          <div className="res-table-head">
            <span>Contributions</span>
          </div>
          <div className="res-table-cards">
            <ResCards />
            <ResCards />
            <ResCards />
            <ResCards />
          </div>
        </div>
      </div>
    </>
  );
}
