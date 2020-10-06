import React, { useState, useEffect } from 'react'
import 'tui-chart/dist/tui-chart.css'
import TuiChart from 'tui-chart';
import {LineChart, PieChart} from '@toast-ui/react-chart'

// 멤버활동 정보
const line_white_theme = {
    series: {
        colors: [
        '#00C473',
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
        ]
    }
};
let line_theme = line_white_theme; 
TuiChart.registerTheme('lineTheme', line_theme);

const line_options = {
    chart: {
      width: '100%',
      height: 250,
      format: '100'
    },
    xAxis: {
      type: 'datetime',
      dateFormat: 'MM/DD',
    },
    series: {
      strokeWidth: 2,
      showDot: true,
      stackType: 'normal',
      pointWidth: 3,
      animation: {
        duration: 0 
      }
    },
    tooltip: {
      align: 'center top',
      template: function(category, item, categoryTimestamp) {
        // return hoverPie(category, item,categoryTimestamp);
      }
    },
    legend: {
      visible: false
    },
    chartExportMenu: {
      visible: false
    },
    theme: 'lineTheme'
  };

  const line_data = {
    categories: ['12/28/2019', '12/30/2020', '01/01/2020', '01/03/2020', '01/05/2020', '01/08/2020', '01/10/2020', '01/12/2020', '01/14/2020', '01/16/2020', '01/17/2020', '01/18/2020', '01/19/2020', '01/20/2020', '01/21/2020', '01/22/2020', '01/23/2020', '01/24/2020', '01/25/2020', '01/26/2020'],
    series: [
      {
        name: 'DAU',
        data: [400, 500, 500, 510, 522, 512, 540, 532, 555, 560, 400, 500, 500, 0, 0, 512, 540, 532, 555, 560]
      }
    ]
  };

const MemberActivity = (props) =>{
    console.log('MemberActivity 들어옴');
    
  useEffect(() => {
    console.log('MemberActivity 값 전달됨',props);
  }, [props])

    return(
        <div className="chart-wrap" id="chart-area">
            그래프그리자
            <LineChart
                data={line_data} 
                options={line_options} 
            />
        </div>
    )
}


export default MemberActivity;
