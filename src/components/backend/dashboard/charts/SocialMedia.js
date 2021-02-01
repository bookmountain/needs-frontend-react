import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class SocialMediaChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'socialMediaBar',
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
            opacityFrom: 0.6,
            opacityTo: 0.2,
            stops: [0, 90, 100],
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ['#7367f0'],
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
            bottom: -30,
          },
        },
        tooltip: {
          x: {
            // show: false
            name: '訂閱用戶',
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
            <div className="circle-icon icon-social">
              <i className="fas fa-user-plus"></i>
            </div>
            <div className="chart-figures">+ {this.props.totalFans}</div>
            <div className="chart-title">粉絲人數</div>
          </div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={[
                {
                  name: '訂閱用戶',
                  data: this.props.numberOfFans,
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

export default SocialMediaChart
