import Highcharts from "highcharts";
import HighchartsHeatmap from "highcharts/modules/heatmap";
import Accessibility from 'highcharts/modules/accessibility'
HighchartsHeatmap(Highcharts);
Accessibility(Highcharts);


Highcharts.setOptions({
  colors: [' #E6F3F7', '  #BEDFEC', ' #69B1CC', ' #536CC5', '#24CBE5', ' #F47954']
});

const data = {

  chart: {
    type: 'heatmap',
    // width: 380,
    height: 410,
    width: 393,
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
    // categories: [
    //     'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    // ],
    reversed: true,
    visible: false,
    height: 312
    // opposite:true
  },

  legend: {
    // align: 'right',
    // layout: 'vertical',
    // margin: 0,
    // verticalAlign: 'bottom',
    // y: -75,
    // symbolHeight: 151,
    // itemMarginBottom: 16,
    enabled: false
  },

  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 9,
      color: '#E6F3F7'
    }, {
      from: 9,
      to: 30,
      color: '#BEDFEC'
    }, {
      from: 30,
      to: 50,
      color: '#69B1CC'

    },
    {
      from: 50,
      to: 70,
      color: ' #536CC5'

    },
    {
      from: 70,
      to: 80,
      color: '#24CBE5'

    }, {
      from: 80,
      to: 120,
      color: '#F47954'

    }]
    // min: 0,
    // minColor: '#E6F3F7',
    // maxColor: Highcharts.getOptions().colors[0],

  },

  series: [{
    // pointWidth: 5,
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
      // color: '#FFFFFF',
    }, {
      // color: '#FFFFFF',
      enabled: true,
      useHTML: true,
      formatter() {
        return '-'
      }
    }],

  },

  ],

}

export default data;