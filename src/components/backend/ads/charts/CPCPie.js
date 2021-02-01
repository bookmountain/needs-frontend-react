import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class CPCPie extends Component {
  constructor(props) {
    super(props)

    this.state = {
      options: {
        chart: {
          id: '',
          toolbar: {
            show: false,
          },
        },
        colors: ['#e8cd00'],
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 135,
            hollow: {
              margin: 25,
              size: '80%',
            },
            track: {
              background: '#f2f2f2',
              strokeWidth: '50%',
            },
            dataLabels: {
              showOn: 'always',
              name: {
                offsetY: -10,
                show: false,
                color: '#888',
                fontSize: '13px',
              },
              value: {
                color: 'rgb(153, 162, 172)',
                fontSize: '4rem',
                show: true,
              },
            },
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            gradientToColors: ['#28c76f'],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: 'round',
        },
        labels: ['Progress'],
      },
    }
  }

  render() {
    return (
      <>
        <div className="chart-card revenue">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={[this.props.costPercentage]}
              type="radialBar"
              height="250"
            />
          </div>
          <div className="row">
            <div className="col-6 goal-box goal-completed">
              <p className="mb-2">已花費</p>
              <sup className="font-medium-1">$</sup>
              <span className="goal-figures">{this.props.totalCost}</span>
            </div>
            <div className="col-6 goal-box goal-in-progress">
              <p className="mb-2">預算</p>
              <sup className="font-medium-1">$</sup>
              <span className="goal-figures">{this.props.totalBudget}</span>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default CPCPie
