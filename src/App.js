import React from "react";

// import Hicharts from "./hicharts/Hicharts";
import HeatMap from "./hicharts/HeatMap";
import MyHeatMap from "./hicharts/customHeatmap/MyHeatMap";
import ColorAxis from "./hicharts/customHeatmap/ColorAxis";
// import TempHeatmap from "./hicharts/TempHeatmap";
import HeatMap2 from "./hicharts/heatmap/HeatMap2";
import HighReact from "./hicharts/miniHeatMap/HighReact";
import "./App.css";
import yearData from './hicharts/miniHeatMap/yearData'


function App() {
  const x = yearData()
  console.log(x)
  console.log(x[0].monthData[0].month,x[0].year)
  return (
    <div>
      <div className="grid-container">
        
        {x[0].monthData.map((value,index) => (
          <div key={index} className="grid-item">
            <HighReact config={value.chartData} month={value.month} year={x[0].year}/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;