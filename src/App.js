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
    console.log(x[0].monthData[0].month, x[0].year)
    console.log(x[0].monthData[0], 'March data')
    return (
        <div style={
            {display: "flex"}
        }>
            <div className="grid-container">

                {
                x[0].monthData.map((value, index) => (
                    <div key={index}
                        className="grid-item">
                        <div style={
                            {
                                // width: 108,
                                // height: 16,
                                fontFamily: 'Open Sans',
                                fontStyle: 'normal',
                                // fontWeight: 400,
                                fontSize: 10,
                                // lineHeight: 10,
                                textAlign: 'center',
                                color: '#616161',
                                flex: 'none',
                            }
                        }>
                            {
                            value.month + ' ' + x[0].year
                        } </div>
                        <HighReact config={
                                value.chartData
                            }
                            month={
                                value.month
                            }
                            year={
                                x[0].year
                            }/>
                    </div>
                ))
            } </div>
            <HeatMap/>
        </div>
    );
}

export default App;
