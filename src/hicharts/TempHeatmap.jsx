import { React, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";

import "./heatmap.css";
import data from "./PData";
HighchartsHeatmap(Highcharts);
require("highcharts/modules/accessibility")(Highcharts);
Highcharts.setOptions({
  colors: [
    " #E6F3F7",
    "  #BEDFEC",
    " #69B1CC",
    " #536CC5",
    "#24CBE5",
    " #F47954",
  ],
});

// console.log(parentData[0][0].visits);
// const d = new Date("July 21, 1983 01:15:00");
// const d = new Date(parentData[0][0].date);
// let day = d.getDay();

// let j = 0;
// for (let i = day; i < data.length; i++) {
//   if (parentData[0][j]?.visits) {
//     data[i].value = parentData[0][j].visits;
//   } else {
//     data[i].value = "";
//   }
//   j++;
// }

function HeatMap() {


    
  useEffect(() => {
    Highcharts.chart("container2", {
      chart: {
        type: "heatmap",
        height: 410,
        width: 310,
        marginBottom: 10,
        inverted: true,
      },

      title: {
        text: "",
        align: "center",
        margin: 0,
        // x: 170
        // visible: false,
      },

      xAxis: {
        gridLineWidth: 0,
        height: 74,
        lineWidth: 0,
        visible: false,
      },

      yAxis: {
        categories: ["", "", "", "", "", "", ""],
        opposite: true,
        width: 84,
        gridLineWidth: 0,
        // visible: false,
        title: {
            enabled: true,
            text: 'Jan 2021',
            style: {
                fontWeight: 'small',
                fontSize:8
            }
        },
      },

      legend: {
        align: "right",
        layout: "vertical",
        margin: 0,
        verticalAlign: "bottom",
        y: -75,
        x: -210,
        symbolHeight: 151,
        itemMarginBottom: 16,
        symbolWidth: 22,
        enabled: false,
      },
      colorAxis: {
        dataClasses: [
          {
            from: 0,
            to: 9,
            color: "#E6F3F7",
          },
          {
            from: 9,
            to: 30,
            color: "#BEDFEC",
          },
          {
            from: 30,
            to: 50,
            color: "#69B1CC",
          },
          {
            from: 50,
            to: 70,
            color: " #536CC5",
          },
          {
            from: 70,
            to: 80,
            color: "#24CBE5",
          },
          {
            from: 80,
            to: 120,
            color: "#F47954",
          },
        ],
        // min: 0,
        // minColor: '#E6F3F7',
        // maxColor: Highcharts.getOptions().colors[0],
      },

      tooltip: {
        enabled: false,
      },

      plotOptions: {
        series: {
          states: {
            hover:()=>{
                // enabled:false,
                return false
            },
          },
        //   allowPointSelect: true,
          point: {
            events: {
              click: (e) => {
                // console.log(e);
                const chart = e.point.series.chart,
                  series = e.point.series;
                const clickedSeriesIndex = e.point.index;
                if (series.previousIndex === clickedSeriesIndex) {
                    series.previousIndex = null;
  
                    chart.series.forEach((series) => {
                      series.points.forEach((point) => {
                        point.graphic.css({
                          opacity: 1,
                          stroke: "",
                          strokeWidth:4
                        });
                      });
                    });
                  } else {
                    series.previousIndex = clickedSeriesIndex;
                    chart.series.forEach((series) => {
                      series.points.forEach((point) => {
                        if (point.index === clickedSeriesIndex)
                          point.graphic.css({
                            opacity: 1,
                            stroke: point.color,
                            strokeWidth:0,
                          
                          })
                        else
                          point.graphic.css({
                            opacity: 0.5,
                            stroke: "",
                            strokeWidth:4
                          });
                      });
                    });
                  }
              },
        
            },
          },
        },
      },

      series: [
        {
          name: "Sales per employee",
          borderWidth: 3,
     
          borderColor: "#FFFFFF",
          data: [
            [0, 0, 9],
            [0, 1, 68],
            [0, 2, 92],
            [0, 3, 92],
            [0, 4, 92],
            [0, 5, 50],
            [0, 6, 9],
            [1, 0, 9],
            [1, 1, 58],
            [1, 2, 92],
            [1, 3, 92],
            [1, 4, 92],
            [1, 5, 40],
            [1, 6, 9],
            [2, 0, 9],
            [2, 1, 58],
            [2, 2, 63],
            [2, 3, 58],
            [2, 4, 92],
            [2, 5, 40],
            [2, 6, 9],
            [3, 0, 9],
            [3, 1, 40],
            [3, 2, 40],
            [3, 3, 40],
            [3, 4, 40],
            [3, 5, 9],
            [3, 6, 9],
            [4, 0, 9],
            [4, 1, 9],
            [4, 2, 9],
            [4, 3, 9],
            [4, 4, 9],
            [4, 5, 9],
            [4, 6, 9],
            [5, 0, 9],
            [5, 1, 9],
            [5, 2, 9],
            [5, 3, 9],
            [5, 4, 9],
            [5, 5, 9],
            [5, 6, 9],
          ],
          dataLabels: [
            {
              enabled: false,
              useHTML: true,
              color: "#FFFFFF",
            },
            {
              //   color: "#FFFFFF",
              enabled: true,
              useHTML: true,
              formatter() {
                return "";
              },
            },
          ],
        },
      ],
    });
  });

  return <div 
//   style={{display: "flex",}} 
  >
      <div id="container2" ></div>
    
    
  </div>;
}

export default HeatMap;
