import data from "./data";
import ColorAxis from "./colorAxis";
const options = {
  chart: {
    type: "heatmap",
    height: 450,
    width: 450,
    marginBottom: 10,
    marginLeft: 0,
    // inverted: true,
  },

  title: {
    text: "",
    align: "center",
    margin: 0,
  },

  xAxis: {
    categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    opposite: true,
    width: 84,
    gridLineWidth: 0,
    visible:false
  },

  yAxis: {
    height: 72,
   
    gridLineWidth: 0,
    title: null,
    reversed: true
  },
  // xAxis: {
  //   gridLineWidth: 0,
  // height: 74,
  //   lineWidth: 0,
  //   visible: false,
  // },

  // yAxis: {
  //   opposite: true,
  // width: 84,
  //   gridLineWidth: 0,
  //   title: {
  //     enabled: true,
  //     text: "Jan 2021",
  //     style: {
  //       fontWeight: "small",
  //       fontSize: 8,
  //     },
  //   },
  // },
  colorAxis: ColorAxis,

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

  tooltip: {
    enabled: false,
  },

  plotOptions: {
    series: {
      states: {
        hover: () => {
          return false;
        },
      },
      point: {
        events: {
          click: (e) => {
            const chart = e.point.series.chart,
              series = e.point.series;
            const clickedSeriesIndex = e.point.index;
            console.log(e.point.options)
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
                      // stroke: point.color,
                      stroke: "#FFFFFF",
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
          enabled: false,
          useHTML: true,
          color: "#FFFFFF",
        },
        {
          enabled: true,
          useHTML: true,
          formatter() {
            return "";
          },
        },
      ],
    },
  ],
};

export default options;
