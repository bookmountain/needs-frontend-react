import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class RevenueChart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: 'revenueChart',
          toolbar: {
            show: false,
          },
        },
        stroke: {
          curve: 'smooth',
          width: 5,
          dashArray: [0, 10],
        },
        colors: ['#fdf497', '#bbb'],
        dataLabels: {
          enabled: false,
        },
        fill: {
          type: ['gradient', 'solid'],
          gradient: {
            shade: 'dark',
            gradientToColors: ['#d6249f'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
        legend: {
          show: false,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return value
            },
          },
        },
        xaxis: {
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
          categories: [...props.durationDays],
        },
      },
    }
  }

  render() {
    return (
      <>
        <div className="chart-card revenue">
          <div className="revenue-title">近兩週收入比較</div>
          <div className=" monthly-income mr-5">
            <div className="month-title">本週</div>
            {/* <sup className="font-medium-1">$</sup> */}
            <span className="this-month-income">
              {new Intl.NumberFormat('zh-Hans-TW', {
                style: 'currency',
                currency: 'TWD',
              }).format(this.props.totalThisWeek)}
            </span>
          </div>
          <div className="monthly-income mr-5">
            <div className="month-title">上週</div>
            {/* <sup className="font-medium-1">$</sup> */}
            <span className="last-month-income">
              {new Intl.NumberFormat('zh-Hans-TW', {
                style: 'currency',
                currency: 'TWD',
              }).format(this.props.totalLastWeek)}
            </span>
          </div>
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={[
                {
                  name: '本週',
                  data: this.props.thisWeekIncome,
                },
                {
                  name: '上週',
                  data: this.props.lastWeekIncome,
                },
              ]}
              type="line"
              height="280"
            />
          </div>
        </div>
      </>
    )
  }
}

export default RevenueChart
