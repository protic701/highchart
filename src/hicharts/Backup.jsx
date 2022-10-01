import { React, useEffect } from 'react'
import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";

import './heatmap.css'
HighchartsHeatmap(Highcharts);
require('highcharts/modules/accessibility')(Highcharts);
Highcharts.setOptions({
    colors: [' #E6F3F7', '  #BEDFEC', ' #69B1CC', ' #536CC5', '#24CBE5', ' #F47954']
});
function HeatMap() {

    useEffect(() => {

        Highcharts.chart('container1', {
            chart: {

                type: 'heatmap',
                height: 410,
                width: 700,
                marginBottom: 10,
            },


            title: {
                text: '',
                visible: false,
            },

            xAxis: {
                categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                opposite: true,
                width: 364,
                lineWidth: 0
            },

            yAxis: {

                reversed: true,
                visible: false,
                height: 312
            },

            legend: {
                align: 'right',
                layout: 'vertical',
                margin: 0,
                verticalAlign: 'bottom',
                y: -75,
                x: -210,
                symbolHeight: 151,
                itemMarginBottom: 16,
                symbolWidth: 22,
            },

            colorAxis: {
                gridLineWidth: 0,
                stops: [
                    [0, '#E6F3F7'],
                    [0.1, '#BEDFEC'],
                    [0.3, '#69B1CC'],
                    [0.5, ' #536CC5'],
                    [1, '#F47954'],
                ],
                min: 0,
                max: 120,
                labels: {
                    formatter: function () {
                        return this.value = "";
                    }
                }
            },

            plotOptions: {
                series: {
                    point: {
                        events: {
                            click: (e) => {
                                const chart = e.point.series.chart,
                                    series = e.point.series,
                                    points = series.points;
                                const clickedSeriesIndex = e.point.index;

                                chart.series.forEach((series) => {
                                    series.points.forEach((point) => {
                                        if (point.index === clickedSeriesIndex)
                                            point.graphic.css({
                                                opacity: 1
                                            });
                                        else
                                            point.graphic.css({
                                                opacity: 0.5
                                            });
                                    });
                                });
                            },
                            // mouseOver: (e) => {
                            //     const chart = e.target.series.chart,
                            //         series = e.target.series,
                            //         points = series.points;
                            //     const clickedSeriesIndex = e.target.index;
                            //     // console.log(e.target)
                            //     chart.series.forEach((series) => {
                            //         series.points.forEach((point) => {
                            //             // series.clicked = false;
                            //             if (point.index === clickedSeriesIndex)
                            //                 point.graphic.css({
                            //                     opacity: 1
                            //                 });
                            //             else
                            //                 point.graphic.css({
                            //                     opacity: 0.5
                            //                 });
                            //         });
                            //     });
                            // },

                            // mouseOut: (e) => {
                            //     const chart = e.target.series.chart,
                            //         series = e.target.series,
                            //         points = series.points;
                            //     const clickedSeriesIndex = e.target.index;
                            //     // console.log(e.target)
                            //     chart.series.forEach((series) => {
                            //         series.points.forEach((point) => {
                            //                 point.graphic.css({
                            //                     opacity: 1
                            //                 });
                            //         });
                            //     });
                            // },
                        }
                    }
                }

            },




            // plotOptions: {

            //     series: {
            //         // className: "popup-on-click",
            //         // borderWidth: 0,
            //         // pointWidth: 24,
            //         // pointPlacement: -0.1,
            //         // states: {
            //         //     inactive: {
            //         //         enabled: false
            //         //     },
            //         //     hover: {
            //         //         enabled: false
            //         //     },
            //         //     select: {
            //         //         enabled: false
            //         //     }
            //         // },
            //         point: {
            //             events: {
            //                 click: (e) => {
            //                     const chart = e.point.series.chart,
            //                         series = e.point.series,
            //                         points = series.points;
            //                     const clickedSeriesIndex = e.point.index;
            //                     console.log("this.series.points", series.clicked, this, e, points,clickedSeriesIndex );

            //                     if (series.clicked === true) {
            //                         chart.series.forEach((series) => {
            //                             series.points.forEach((point) => {
            //                                 console.log('ok',series)
            //                                 series.clicked = false;
            //                                 point.graphic.css({
            //                                     opacity: 1
            //                                 });
            //                             });
            //                         });
            //                     } else {
            //                         chart.series.forEach((series) => {

            //                             if (series.index !== clickedSeriesIndex) {

            //                                 series.clicked = false;
            //                                 series.points.forEach((point) => {
            //                                     point.graphic.css({
            //                                         opacity: 0.2
            //                                     });
            //                                 });
            //                             } else {
            //                                 series.clicked = true;
            //                                 series.points.forEach((point) => {
            //                                     point.graphic.css({
            //                                         opacity: 1
            //                                     });
            //                                 });
            //                             }
            //                         });
            //                     }
            //                     console.log('chart >>> ', chart)
            //                     chart.redraw();
            //                 }
            //             }
            //         }
            //     }
            // },
















            series: [{
               

                name: 'Sales per employee',
                borderWidth: 4,
                borderColor: '#FFFFFF',

                data: [
                    [0, 0, ''], [0, 1, ''], [0, 2, ''], [0, 3, ''], [0, 4, ''], [0, 5, ''],
                    [1, 0, 60], [1, 1, 58], [1, 2, 63], [1, 3, 30], [1, 4, 9], [1, 5, ''],
                    [2, 0, 92], [2, 1, 85], [2, 2, 63], [2, 3, 32], [2, 4, 11], [2, 5, ''],
                    [3, 0, 92], [3, 1, 80], [3, 2, 63], [3, 3, 40], [3, 4, 23], [3, 5, ''],
                    [4, 0, 82], [4, 1, 88], [4, 2, 80], [4, 3, 37], [4, 4, 20], [4, 5, ''],
                    [5, 0, 60], [5, 1, 58], [5, 2, 63], [5, 3, 20], [5, 4, 12], [5, 5, ''],
                    [6, 0, ''], [6, 1, ''], [6, 2, ''], [6, 3, ''], [6, 4, ''], [6, 5, ''],
                ],
                dataLabels: [{
                    enabled: true,
                    useHTML: true,
                    color: '#FFFFFF',
                }, {
                    color: '#FFFFFF',
                    enabled: true,
                    useHTML: true,
                    formatter() {
                        return '-'
                    }
                }],


            },

            ],




        });
    })

    return (
        <div id="container1">
            
        </div>
    )
}

export default HeatMap






// // ----------------------------------------only for review
// let openTooltips = [];
// Highcharts.setOptions({
//   colors: ["#95DBC6", "#E8C149", "#90AA61", "#C04531", "#243C3E"]
// });
// Highcharts.chart("container", {
//   chart: {
//     height: 300,
//     type: "bar",
//     marginTop: 0,
//     style: {
//       fontFamily: "IBM Plex Sans",
//       fontWeight: 500
//     }
//   },
//   exporting: {
//     enabled: false
//   },
//   credits: {
//     enabled: false
//   },
//   title: {
//     text: ""
//   },
//   legend: {
//     enabled: false
//   },
//   tooltip: {
//     enabled: false,
//     shared: false,
//     animation: false
//   },
//   xAxis: {
//     title: {
//       text: ""
//     },
//     categories: [
//       "Anlagedepot Basic 123-ABC_110",
//       "Verwaltungsdepot ABC-987-911",
//       "Execution Only Futures-XYZ"
//     ],
//     lineWidth: 0,
//     tickWidth: 0,

//     labels: {
//       overflow: "allow",
//       style: {
//         fontSize: "16px"
//       },
//       padding: 10,
//       useHTML: true,
//       x: 10,
//       y: -25,
//       align: "left",
//       formatter: function () {
//         return '<span class="xaxis-label">' + this.value + "</span>";
//       }
//     }
//   },
//   yAxis: {
//     title: {
//       text: ""
//     },
//     reversedStacks: false,
//     startOnTick: false,
//     plotLines: [
//       {
//         value: 0,
//         width: 1,
//         color: "#8F8A8A",
//         zIndex: 10
//       }
//     ]
//   },
//   plotOptions: {
//     bar: {
//       stacking: "normal"
//     },
//     series: {
//       className: "popup-on-click",
//       borderWidth: 0,
//       pointWidth: 24,
//       pointPlacement: -0.1,
//       states: {
//         inactive: {
//           enabled: false
//         },
//         hover: {
//           enabled: false
//         },
//         select: {
//           enabled: false
//         }
//       },
//       point: {
//         events: {
//           click: (e) => {
//             const chart = e.point.series.chart,
//               series = e.point.series,
//               points = series.points;
//             clickedSeriesIndex = e.point.series.index;
//             console.log("this.series.points", series.clicked, this, e, points);

//             if (series.clicked === true) {
//               chart.series.forEach((series) => {
//                 series.points.forEach((point) => {
//                   series.clicked = false;
//                   point.graphic.css({
//                     opacity: 1
//                   });
//                 });
//               });
//             } else {
//               chart.series.forEach((series) => {
//                 if (series.index !== clickedSeriesIndex) {
//                   series.clicked = false;
//                   series.points.forEach((point) => {
//                     point.graphic.css({
//                       opacity: 0.2
//                     });
//                   });
//                 } else {
//                   series.clicked = true;
//                   series.points.forEach((point) => {
//                     point.graphic.css({
//                       opacity: 1
//                     });
//                   });
//                 }
//               });
//             }
//             console.log('chart >>> ', chart)
//             chart.redraw();
//           }
//         }
//       }
//     }
//   },
//   series: [
//     {
//       name: "Liquidität",
//       data: [-10, 5, 10]
//     },
//     {
//       name: "Obligationen",
//       data: [5, 0, 10]
//     },
//     {
//       name: "Aktien",
//       data: [10, 20, 8]
//     },
//     {
//       name: "Immobilien",
//       data: [3, 0, 2]
//     },
//     {
//       name: "Alternativen Anlagen",
//       data: [4, 0, 0]
//     }
//   ]
// });


