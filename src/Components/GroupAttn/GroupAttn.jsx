import React, {useState} from 'react';
import './GroupAttn.css';
import Chart from "react-apexcharts";
// Chart 
// import {
//     CircularProgressbar ,buildStyles ,CircularProgressbarWithChildren } from "react-circular-progressbar";
// import 'react-circular-progressbar/dist/styles.css';


const GroupAttn =()=>{
//  chart Dynamic data 
 const options = {
    series: [76, 100],
          chart: {
          height: 390,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 20,
              size: '30%',
              background: 'transparent',
              image: undefined,
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
              }
            }
          }
        },
        colors: ['#3d861d','#76dd49' ],
        labels: ['WFO', 'WFH'],
        legend: {
        //   show: true,
        //   floating: true,
          fontSize: '12px',
          fontWeight:'500',
          position: 'left',
          offsetX: 1,
          offsetY: 5,
          labels: {
            useSeriesColors: true,
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex] + "%"
          },
          itemMargin: {
            vertical: 1
          }
        },
        // responsive: [{
        //   breakpoint: 480,
        //   options: {
        //     legend: {
        //         show: false
        //     }
        //   }
        // }]
            }
    return(
        <>
            <div className='groupAttnContainer'>
                <div className='groupAttnContainerSub'>

                    <div className='groupAttnContainerSubGroupOne'>one</div>
                    <div className='groupAttnContainerSubGroupTwo'>two</div>

                </div>
                <div className='groupAttnContainerChart'>
                         <Chart options={options} series={options.series} type="radialBar" width={235} height={220} />
                </div>

            </div>
        </>
    );
}
export default GroupAttn;
