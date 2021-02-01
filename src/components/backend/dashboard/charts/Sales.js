import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class BrowseChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'salesChart',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 3,
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.2,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#ea5455'],
        yaxis: {
          show: false,
        },
        xaxis: {
          labels: {
            show: false,
          },
          crosshairs: {
            show: true,
          },
          axisTicks: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          categories: [...props.durationDays],
        },
        grid: {
          show: false,
          padding: {
            top: -30,
            left: 0,
            right: 0,
            bottom: 0,
          },
        },
        tooltip: {
          x: {
            // show: false
          },
          enabled: true,
          formatter: undefined,
          offsetY: 0,
        },
      },
    }
  }

  render() {
    return (
      <>
        <div className="chart-card">
          <div className="chart-card-header">
            <div className="circle-icon icon-sale">
              <i className="fas fa-cart-plus"></i>
            </div>
            <div className="chart-figures">
              + {this.props.getNumberOfTotalOrders}
            </div>
            <div className="chart-title">訂單數</div>
          </div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={[
                {
                  name: '訂單量',
                  data: this.props.getAmountOfOrders,
                },
              ]}
              type="area"
              height="100"
            />
          </div>
        </div>
      </>
    )
  }
}

export default BrowseChart
