import React from "react";
import { useState } from "react";
import Cards from "./cards";
import MarketplaceBUY from "./ResearchBUY";

function Research(){
    const [toggle, setToggle] = useState(false)
  
    return(
      <>
        <button onClick={() => setToggle(!toggle)}>Toggle State</button>
        { toggle==true ? <MarketplaceBUY /> : <Cards /> }
        
      </>
    )
  }
  export default Research;
  