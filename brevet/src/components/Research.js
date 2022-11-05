import React from "react";
import { useState } from "react";


function Research(){
    const [toggle, setToggle] = useState(false)
  
    return(
      <>
        <button onClick={() => setToggle(!toggle)}>Toggle State</button>

        
      </>
    )
  }
  export default Research;
  