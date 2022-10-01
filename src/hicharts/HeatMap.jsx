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

const parentData = [
  [
    { date: "September 1 ,2022", visits: 22 },
    { date: "September 2 ,2022", visits: 30 },
    { date: "September 3 ,2022", visits: "" },
    { date: "September 4 ,2022", visits: "" },
    { date: "September 5 ,2022", visits: 60 },
    { date: "September 6 ,2022", visits: 70 },
    { date: "September 7 ,2022", visits: 80 },
    { date: "September 8 ,2022", visits: 90 },
    { date: "September 9 ,2022", visits: 10 },
    { date: "September 3 ,2022", visits: "" },
    { date: "September 4 ,2022", visits: "" },
    { date: "September 5 ,2022", visits: 60 },
    { date: "September 6 ,2022", visits: 70 },
    { date: "September 7 ,2022", visits: 80 },
    { date: "September 8 ,2022", visits: 90 },
    { date: "September 9 ,2022", visits: 10 },
    { date: "September 3 ,2022", visits: "" },
    { date: "September 4 ,2022", visits: "" },
    { date: "September 5 ,2022", visits: 60 },
    { date: "September 6 ,2022", visits: 70 },
    { date: "September 7 ,2022", visits: 80 },
    { date: "September 8 ,2022", visits: 90 },
    { date: "September 9 ,2022", visits: 10 },
    { date: "September 3 ,2022", visits: "" },
    { date: "September 4 ,2022", visits: "" },
    { date: "September 5 ,2022", visits: 60 },
    { date: "September 6 ,2022", visits: 70 },
    { date: "September 7 ,2022", visits: 80 },
    { date: "September 8 ,2022", visits: 90 },
    { date: "September 9 ,2022", visits: 10 },
    { date: "September 3 ,2022", visits: "" },
    { date: "September 4 ,2022", visits: "" },
    { date: "September 5 ,2022", visits: 60 },
    { date: "September 6 ,2022", visits: 70 },
    { date: "September 7 ,2022", visits: 80 },
    { date: "September 8 ,2022", visits: 90 },
    { date: "September 9 ,2022", visits: 10 },
    { date: "September 10,2022", visits: "" },
  ],
];

// console.log(parentData[0][0].visits);
// const d = new Date("July 21, 1983 01:15:00");
const d = new Date(parentData[0][0].date);
let day = d.getDay();

let j = 0;
for (let i = day; i < data.length; i++) {
  if (parentData[0][j]?.visits) {
    data[i].value = parentData[0][j].visits;
  } else {
    data[i].value = "";
  }
  j++;
}

function HeatMap() {
  useEffect(() => {
    Highcharts.chart("container1", {
      chart: {
        type: "heatmap",
        height: 410,
        width: 700,
        marginBottom: 10,
        inverted: true,
        
      },

      title: {
        text: "",
        visible: false,
      },

      xAxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        gridLineWidth: 0,
        height: 318,
        lineWidth: 0,
        opposite: true,
        visible: true,
      },

      yAxis: {
        
        opposite: true,
        width: 364,
        title: "",
        visible: false,
        gridLineWidth: 0,
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
      },

      colorAxis: {
        gridLineWidth: 0,
        stops: [
          [0, "#E6F3F7"],
          [0.1, "#BEDFEC"],
          [0.3, "#69B1CC"],
          [0.5, " #536CC5"],
          [1, "#F47954"],
        ],
        min: 0,
        max: 120,
        labels: {
          formatter: function () {
            return (this.value = "");
          },
        },
      },

      tooltip: {
        enabled: false,
      },

      plotOptions: {
        series: {
          states: {
            hover:()=>{
              // enabled:false,
          },
          },
          // allowPointSelect: true,
          point: {
          
            events: {
              click: (e) => {
                const chart = e.point.series.chart,
                  series = e.point.series;
                const clickedSeriesIndex = e.point.index;
                console.log(e);
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
                          strokeWidth:1,
                        
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
          borderWidth: 4,
          borderColor: "#FFFFFF",
          data: [
            {
              y: 0,
              x: 3,
              value: 100,
            },
            {
              y: 0,
              x: 4,
              value: 36,
            },
            {
              y: 0,
              x: 5,
              value: 36,
            },
            {
              y: 0,
              x: 6,
              value: 36,
            },
            {
              y: 1,
              x: 0,
              value: 150,
            },
            {
              y: 1,
              x: 1,
              value: 36,
            },
            {
              y: 1,
              x: 2,
              value: 36,
            },
            {
              y: 1,
              x: 3,
              value: 36,
            },
            {
              y: 1,
              x: 4,
              value: 36,
            },
            {
              y: 1,
              x: 5,
              value: 36,
            },
            {
              y: 1,
              x: 6,
              value: 36,
            },
            {
              y: 2,
              x: 0,
              value: 36,
            },
            {
              y: 2,
              x: 1,
              value: 36,
            },
            {
              y: 2,
              x: 2,
              value: 36,
            },
            {
              y: 2,
              x: 3,
              value: 36,
            },
            {
              y: 2,
              x: 4,
              value: 36,
            },
            {
              y: 2,
              x: 5,
              value: 36,
            },
            {
              y: 2,
              x: 6,
              value: 36,
            },
            {
              y: 3,
              x: 0,
              value: 36,
            },
            {
              y: 3,
              x: 1,
              value: 36,
            },
            {
              y: 3,
              x: 2,
              value: 36,
            },
            {
              y: 3,
              x: 3,
              value: 36,
            },
            {
              y: 3,
              x: 4,
              value: 36,
            },
            {
              y: 3,
              x: 5,
              value: 36,
            },
            {
              y: 3,
              x: 6,
              value: 36,
            },
            {
              y: 4,
              x: 0,
              value: 36,
            },
            {
              y: 4,
              x: 1,
              value: 36,
            },
            {
              y: 4,
              x: 2,
              value: 36,
            },
            {
              y: 4,
              x: 3,
              value: 36,
            },
            {
              y: 4,
              x: 4,
              value: 36,
            },
            {
              y: 4,
              x: 5,
              value: 36,
            },
            {
              y: 4,
              x: 6,
              value: 36,
            },
            {
              y: 5,
              x: 0,
              value: 36,
            },
            {
              y: 5,
              x: 1,
              value: 36,
            },
            {
              y: 5,
              x: 2,
              value: 36,
            },
            {
              y: 5,
              x: 3,
              value: 36,
            },
            {
              y: 5,
              x: 4,
              value: 36,
            },
            {
              y: 5,
              x: 5,
              value: 36,
            },
            {
              y: 5,
              x: 6,
              value: 36,
            },
          ],
          dataLabels: [
            {
              enabled: true,
              useHTML: true,
              color: "#FFFFFF",
            },
            {
              //   color: "#FFFFFF",
              enabled: true,
              useHTML: true,
              formatter() {
                return "-";
              },
            },
          ],
        },
      ],
    });
  });

  return <div id="container1" style={{}}></div>;
}

export default HeatMap;
/**
 *
 * {
 * ts:0,
 *
 * }
 */
