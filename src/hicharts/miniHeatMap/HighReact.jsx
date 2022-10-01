import { React } from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import tempdata from './ConfigHeatmap'

function HighcgartReact() {
  return (
    <div
    style={{
      height: 110,
      width: 100,
      overflow: "hidden",
    }}
    >
      <HighchartsReact highcharts={Highcharts} options={tempdata} />
    </div>
  );
}

export default HighcgartReact;
