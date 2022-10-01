import { React, useEffect } from 'react'
import Highcharts from 'highcharts';

import data from './data'


function MyHeatMap() {

    useEffect(() => {
        Highcharts.setOptions({
            colors: [' #E6F3F7', '  #BEDFEC', ' #69B1CC', ' #536CC5', '#24CBE5', ' #F47954']
        });
        Highcharts.chart('container', data);
    })
    return (
        <div id="container"
            style={{
                height: 350,
                width: 400,
                overflow:'hidden',
            }}>
        </div>
    )
}

export default MyHeatMap