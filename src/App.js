import React from "react";

// import Hicharts from "./hicharts/Hicharts";
import HeatMap from "./hicharts/HeatMap";
import MyHeatMap from "./hicharts/customHeatmap/MyHeatMap";
import ColorAxis from "./hicharts/customHeatmap/ColorAxis";
// import TempHeatmap from "./hicharts/TempHeatmap";
import HeatMap2 from "./hicharts/heatmap/HeatMap2";
import HighReact from "./hicharts/miniHeatMap/HighReact";
import "./App.css";
function App() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          height: 350,
          width: 500,
          overflow: "hidden",
        }}
      >
        <MyHeatMap />
        <ColorAxis />

        {/* {/ <Hicharts /> /} */}
        {/* {/ <TempHeatmap /> } */}
      </div>
      <HeatMap />
      <HeatMap2 />
      {/* <div>
        <div style={{ display: "flex" }}>
          <HighReact />
          <HighReact />
          <HighReact />
        </div>
        <div style={{ display: "flex" }}>
          <HighReact />
          <HighReact />
          <HighReact />
        </div>
        <div style={{ display: "flex" }}>
          <HighReact />
          <HighReact />
          <HighReact />
        </div>
        <div style={{ display: "flex" }}>
          <HighReact />
          <HighReact />
          <HighReact />
        </div>
      </div> */}

      <div className="grid-container">
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
        <div className="grid-item">
          <HighReact />
        </div>
      </div>
    </div>
  );
}

export default App;