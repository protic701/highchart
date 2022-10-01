import { React} from "react";
import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import chartConfig from "./chartConfig";

function HeatMap() {
  return (
    <div id="container3">
      <HighchartsReact highcharts={Highcharts} options={chartConfig} />
    </div>
  );
}

export default HeatMap;
