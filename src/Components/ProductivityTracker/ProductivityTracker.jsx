import './ProductivityTracker';

import Chart from "react-apexcharts";

const ProductivityTracker = () =>{

    const  series = [{
        name: 'Inflation',
        data: [104,108,101],
      }]

    const options = {
      series: [90, 110],
        chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          borderRadius: 20,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["Eycare", "Surgical", "Ortho"],
        position: 'bottom', 
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [50, 100],
              opacityFrom: 0.4,
              opacityTo: 1  ,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        min: 80,
        max: 110,
        axisBorder: {
          show: true
        },
        axisTicks: {
          show: true,
        },
        labels: {
          show: true,
          formatter: function (val) {
            return val + "%";
          }
        }
      
      },
      title: {
        text: 'Monthly Inflation in Argentina, 2002',
        floating: true,
        offsetY: 0,
        align: 'center',
        style: {
          color: '#444'
        }
      }
    }

    return(
        <>
            <div className='productivityTrackerContainer'>
                <div className='productivityTrackerSub1'></div>
                <div className='productivityTrackerSub2'>
                    <Chart options={options} series={series} type="bar" width={800} height={400} />   
                </div>
            </div>
        </>
    );
}

export default ProductivityTracker;