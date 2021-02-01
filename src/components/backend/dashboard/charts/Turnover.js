import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class BrowseChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'turnoverChart',
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
        colors: ['#ff9f43'],
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
            <div className="circle-icon icon-money">
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <div className="chart-figures">{this.props.avgTurnover}%</div>
            <div className="chart-title">轉換率</div>
          </div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={[
                {
                  name: '轉換率',
                  data: this.props.totalTurnover,
                },
              ]}
              type
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
