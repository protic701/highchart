// import React from "react";


// refer to data recivie from APi or database
import apiData from "./apiData";
// Pdata is WHERE API data gets sets and use in heatmap as data1
import data1 from "./PData";
import processData from "./ProcessData";

// ------------------below pre processsing the api data to set it on Pdata and returning new data as data--------------
const data = processData(data1, apiData);
const chartConfig = {
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
    gridLineWidth: 0,
    height: 318,
    lineWidth: 0,
    opposite: true,
    visible: false,
  },

  yAxis: {
    categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    opposite: true,
    width: 364,
    title: "",
    // visible:false,
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
        hover: () => {
          // enabled:false,
        },
      },
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
                    strokeWidth: 4,
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
                      stroke: "#FFFFFF",
                      // stroke: point.color,
                      strokeWidth: 0,
                    });
                  else
                    point.graphic.css({
                      opacity: 0.5,
                      stroke: "",
                      strokeWidth: 4,
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
      data: data,
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
};

export default chartConfig;
