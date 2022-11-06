import React from "react";
import "../css/Navbar.css";

// export default function Navbar() {
//   let [nav, setNav] = React.useState(0);
//   let buttonRef = React.useRef();
//   let barRef = React.useRef();
//   React.useEffect(() => {
//     buttonRef.current.addEventListener("mouseover", show);
//     buttonRef.current.addEventListener("mouseleave", noshow);
//     // console.log(buttonRef.current.mouseEvent);
//   }, []);
//   function show() {
//     setNav(1);
//   }
//   function noshow() {
//     setNav(0);
//   }
//   function bar() {
//     if (nav)
//       return (
//         <div className="Nav-Nav" ref={barRef}>
//           <div className="Nav-item"></div>
//           <div className="Nav-item">
//             <div className="Nav-items"></div>
//             <div className="Nav-items"></div>
//             <div className="Nav-items"></div>
//             <div className="Nav-items"></div>
//           </div>
//         </div>
//       );
//     else return;
//   }
//   return (
//     <>
//       {bar()}
//       <div className="Nav-button" ref={buttonRef}></div>
//     </>
//   );
// }
//#742284
//#ac0562

export default function Navbar({ address }) {
  const targetRef = React.useRef();
  const [meta, setMeta] = React.useState(false);
  const [meta1, setMeta1] = React.useState(1);

  //   const callback = (entries) => {
  //     const [entry] = entries;
  //     if (!entry.isIntersecting) {
  //       targetRef.current.classList.add("sticky");
  //     } else targetRef.current.classList.remove("sticky");
  //   };

  //   const options = useMemo(() => {
  //     return {
  //       //   root: null,
  //       rootMargin: "100px",
  //       threshold: 1,
  //     };
  //   }, []);

  //   useEffect(() => {
  //     const observer = new IntersectionObserver(callback, options);
  //     const currentTarget = targetRef.current;
  //     if (currentTarget) observer.observe(currentTarget);

  //     return () => {
  //       if (currentTarget) observer.unobserve(currentTarget);
  //     };
  //   }, [targetRef, options]);

  React.useEffect(() => {
    // metamask();
  }, []);

  function metamask() {
    if (meta) {
      return (
        <div className="nav-model">
          <span className="nav-address">{address}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#999999"
              class="w-6 h-6"
              onClick={() => {
                console.log(address);
                navigator.clipboard.writeText(address);
              }}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </span>
        </div>
      );
    } else return;
  }

  //   function address(){
  //     if(meta1)
  //   }

  return (
    <>
      <div className="Navbar" ref={targetRef}>
        <div className="Nav-item Nav-logo">
          <img alt="logo" src={require("../images/brevet.png")}></img>
        </div>
        <div className="Nav-item">
          <div className="Nav-items">
            <span>Home</span>
          </div>
          <div className="Nav-items">
            <span>Create</span>
          </div>
          <div className="Nav-items">
            <span>My Collection</span>
          </div>
          <div className="Nav-items">
            <span>Research Helper</span>
          </div>
          <div className="Nav-items nav-profile" onClick={() => setMeta(!meta)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 212 189"
            >
              <g fill="none" fill-rule="evenodd">
                <polygon
                  fill="#CDBDB2"
                  points="60.75 173.25 88.313 180.563 88.313 171 90.563 168.75 106.313 168.75 106.313 180 106.313 187.875 89.438 187.875 68.625 178.875"
                />
                <polygon
                  fill="#CDBDB2"
                  points="105.75 173.25 132.75 180.563 132.75 171 135 168.75 150.75 168.75 150.75 180 150.75 187.875 133.875 187.875 113.063 178.875"
                  transform="matrix(-1 0 0 1 256.5 0)"
                />
                <polygon
                  fill="#393939"
                  points="90.563 152.438 88.313 171 91.125 168.75 120.375 168.75 123.75 171 121.5 152.438 117 149.625 94.5 150.188"
                />
                <polygon
                  fill="#F89C35"
                  points="75.375 27 88.875 58.5 95.063 150.188 117 150.188 123.75 58.5 136.125 27"
                />
                <polygon
                  fill="#F89D35"
                  points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                />
                <polygon
                  fill="#D87C30"
                  points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                />
                <polygon
                  fill="#EA8D3A"
                  points="46.125 101.813 65.25 119.813 65.25 137.813"
                />
                <polygon
                  fill="#F89D35"
                  points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                />
                <polygon
                  fill="#EB8F35"
                  points="65.25 138.375 60.75 173.25 90.563 152.438"
                />
                <polygon
                  fill="#EA8E3A"
                  points="92.25 102.375 95.063 150.188 86.625 125.719"
                />
                <polygon
                  fill="#D87C30"
                  points="39.375 138.938 65.25 138.375 60.75 173.25"
                />
                <polygon
                  fill="#EB8F35"
                  points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                />
                <polygon
                  fill="#E8821E"
                  points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                />
                <polygon
                  fill="#DFCEC3"
                  points="60.75 173.25 90.563 152.438 88.313 170.438 88.313 180.563 68.063 176.625"
                />
                <polygon
                  fill="#DFCEC3"
                  points="121.5 173.25 150.75 152.438 148.5 170.438 148.5 180.563 128.25 176.625"
                  transform="matrix(-1 0 0 1 272.25 0)"
                />
                <polygon
                  fill="#393939"
                  points="70.313 112.5 64.125 125.438 86.063 119.813"
                  transform="matrix(-1 0 0 1 150.188 0)"
                />
                <polygon
                  fill="#E88F35"
                  points="12.375 .563 88.875 58.5 75.938 27"
                />
                <path
                  fill="#8E5A30"
                  d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                />
                <g transform="matrix(-1 0 0 1 211.5 0)">
                  <polygon
                    fill="#F89D35"
                    points="16.313 96.188 .563 141.75 39.938 139.5 65.25 139.5 65.25 119.813 64.125 79.313 58.5 83.813"
                  />
                  <polygon
                    fill="#D87C30"
                    points="46.125 101.25 92.25 102.375 87.188 126 65.25 120.375"
                  />
                  <polygon
                    fill="#EA8D3A"
                    points="46.125 101.813 65.25 119.813 65.25 137.813"
                  />
                  <polygon
                    fill="#F89D35"
                    points="65.25 120.375 87.75 126 95.063 150.188 90 153 65.25 138.375"
                  />
                  <polygon
                    fill="#EB8F35"
                    points="65.25 138.375 60.75 173.25 90 153"
                  />
                  <polygon
                    fill="#EA8E3A"
                    points="92.25 102.375 95.063 150.188 86.625 125.719"
                  />
                  <polygon
                    fill="#D87C30"
                    points="39.375 138.938 65.25 138.375 60.75 173.25"
                  />
                  <polygon
                    fill="#EB8F35"
                    points="12.938 188.438 60.75 173.25 39.375 138.938 .563 141.75"
                  />
                  <polygon
                    fill="#E8821E"
                    points="88.875 58.5 64.688 78.75 46.125 101.25 92.25 102.938"
                  />
                  <polygon
                    fill="#393939"
                    points="70.313 112.5 64.125 125.438 86.063 119.813"
                    transform="matrix(-1 0 0 1 150.188 0)"
                  />
                  <polygon
                    fill="#E88F35"
                    points="12.375 .563 88.875 58.5 75.938 27"
                  />
                  <path
                    fill="#8E5A30"
                    d="M12.3750002,0.562500008 L2.25000003,31.5000005 L7.87500012,65.250001 L3.93750006,67.500001 L9.56250014,72.5625 L5.06250008,76.5000011 L11.25,82.1250012 L7.31250011,85.5000013 L16.3125002,96.7500014 L58.5000009,83.8125012 C79.1250012,67.3125004 89.2500013,58.8750003 88.8750013,58.5000009 C88.5000013,58.1250009 63.0000009,38.8125006 12.3750002,0.562500008 Z"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
      {metamask()}
    </>
  );
}
