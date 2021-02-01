import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class BuyerChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        labels: ['新買家', '老顧客'],
        colors: [
          'rgba(234, 84, 85, 0.8)',
          'rgba(0, 207, 232, 0.8)',
          'rgba(40, 199, 111, 0.8)',
        ],
        legend: {
          show: true,
          position: 'left',
          fontSize: '18px',
          //   horizontalAlign: 'center',
        },
      },
      series: [210, 30],
    }
  }

  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="320px"
        />
      </>
    )
  }
}

export default BuyerChart
