import { React } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import tempdata from './ConfigHeatmap'

function HighcgartReact({config,month,year}) {

  return (
    
    <div
    style={{
      height: 150,
      width: 84,
      overflow: "hidden",
    }}
    >
      <HighchartsReact highcharts={Highcharts} 
      options={{...tempdata,
        series:[{...tempdata.series[0], 
        data:config}],
        yAxis:{...tempdata.yAxis,title:{...tempdata.yAxis.title,text:month+' '+year}}, 
        }} />
    </div>
  );
}

export default HighcgartReact;



