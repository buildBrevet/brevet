import "../css/research.css";
import ResCards from "./res-cards";

export default function Research() {
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
            <div className="res-token-content1 ansh1">
              <svg
                width="150"
                height="150"
                viewBox="0 0 256 417"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid"
              >
                <path
                  fill="#343434"
                  d="M127.961 0l-2.795 9.5v275.668l2.795 2.79 127.962-75.638z"
                />
                <path
                  fill="#8C8C8C"
                  d="M127.962 0L0 212.32l127.962 75.639V154.158z"
                />
                <path
                  fill="#3C3C3B"
                  d="M127.961 312.187l-1.575 1.92v98.199l1.575 4.6L256 236.587z"
                />
                <path fill="#8C8C8C" d="M127.962 416.905v-104.72L0 236.585z" />
                <path
                  fill="#141414"
                  d="M127.961 287.958l127.96-75.637-127.96-58.162z"
                />
                <path fill="#393939" d="M0 212.32l127.96 75.638v-133.8z" />
              </svg>
            </div>
          </div>
          <div className="res-token">
            <div className="res-token-content">
              <div className="res-token-val">
                <span>5.00</span>
              </div>
              <div className="res-token-curr">
                <span>BRE</span>
              </div>
            </div>
            <div className="res-token-content1 ansh">
              <img alt="gg1" src={require("../images/logorb.png")}></img>
            </div>
          </div>
        </div>
        <div className="res-table">
          <div className="res-table-head">
            <button>
              <span>Contributions</span>
            </button>
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
