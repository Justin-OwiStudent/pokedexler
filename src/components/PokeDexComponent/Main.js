import React from "react";
import PokeDex from "./PokeDex";
import ChartOne from "./ChartOne";
import ChartTwo from "./CHartTwo";
import './Main.css'





export default function Main() {
  return (
    <>
      <div className="battleground2">
        <div className="hero-text">
    
        </div>

    
        <div className="main-block">
          <PokeDex />
          {/* <div className="left1">        
            <ChartOne />
          </div>
        <div className="right1">
            <ChartTwo/>
          </div> */}
        </div>

        <div className="show">
           
        </div>

      </div>
     
    </>
  );
}
