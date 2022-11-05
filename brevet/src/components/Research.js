import React from "react";
import { useState } from "react";
import Cards from "./cards";
import MarketplaceBUY from "./ResearchBUY";
import ResearchSell from "./ResearchSell";

function Research(){
    const [toggle, setToggle] = useState(false)
  
    return(
      <>
        <button onClick={() => setToggle(!toggle)} className="res-sell-or-buy cre-submit">{toggle==true? "Sell": "Buy"}</button>
        { toggle==true ? <MarketplaceBUY /> : <ResearchSell /> }
        
      </>
    )
  }
  export default Research;
  