import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class KeyIndexChart extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      series: [this.props.initData],
      options: {
        chart: {
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [5, 7, 5, 5, 7, 5],
          curve: 'straight',
          dashArray: [0, 8, 5, 0, 8, 5],
        },
        colors: [this.props.initData.color],
        title: {
          text: '過去七天 ',
          align: 'left',
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              '' +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ''
            )
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        xaxis: {
          categories: [...props.durationDays],
        },
        yaxis: [
          {
            show: false, // default will be true
          },
          {
            show: false,
          },
        ],
        tooltip: {
          y: [
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
            {
              title: {
                formatter: function (val) {
                  return val
                },
              },
            },
          ],
        },
        grid: {
          borderColor: '#f1f1f1',
        },
      },
    }
  }
  render() {
    return (
      <>
        <Chart
          options={this.state.options}
          series={this.props.initData}
          type="line"
          height="300px"
          width="100%"
        />
      </>
    )
  }
}

export default KeyIndexChart
