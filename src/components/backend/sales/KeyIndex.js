import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card } from 'react-bootstrap'
import moment from 'moment'
import 'moment/locale/zh-tw'
import KeyIndexChart from '../../../components/backend/sales/charts/KeyIndexChart.js'
import Axios from 'axios'

function KeyIndex() {
  moment.locale('zh-tw')
  const [thisWeekIncome, setThisWeekIncome] = useState()
  const [totalThisWeek, setTotalThisWeek] = useState()
  const [getAmountOfOrders, setGetAmountOfOrders] = useState()
  const [getNumberOfTotalOrders, setNumberOfTotalOrders] = useState()

  const getAmountOfOrdersAPI = () => {
    Axios.get('http://localhost:5000/dashboard/amountoforders').then(
      (response) => {
        const data = response.data
        let amountOfOrders = data.length
        let fakeOrders = [22, 34, 38, 50, 19, 25]
        let totalAmountOfOrders =
          fakeOrders.reduce(function (a, b) {
            return a + b
          }, 0) + amountOfOrders

        let incomeToday = 0
        for (let i = 0; i < data.length; i++) {
          incomeToday = incomeToday + parseInt(data[i].amount)
        }
        let fakeIncomeThisWeek = [
          195780,
          130840,
          170840,
          189500,
          217680,
          169820,
        ]
        let totalIncomeThisWeek =
          fakeIncomeThisWeek.reduce(function (a, b) {
            return a + b
          }, 0) + incomeToday

        setNumberOfTotalOrders([totalAmountOfOrders])
        setGetAmountOfOrders([...fakeOrders, amountOfOrders])
        setTotalThisWeek([totalIncomeThisWeek])
        setThisWeekIncome([...fakeIncomeThisWeek, incomeToday])
      }
    )
  }
  let dateArray = []
  for (let i = 0; i < 7; i++) {
    let date = moment().subtract(i, 'days').format('MMM Do')
    dateArray.push(date)
  }
  dateArray = dateArray.reverse()

  let averageMoneyArray = []
  let pageViewArray = [436, 674, 700, 891, 603, 788, 567]
  let turnoverArray = []
  for (let i = 0; i < 7; i++) {
    if (thisWeekIncome && getAmountOfOrders) {
      let averageMoney = Math.floor(thisWeekIncome[i] / getAmountOfOrders[i])
      averageMoneyArray.push(averageMoney)
      let averageTurnover = (
        (getAmountOfOrders[i] / pageViewArray[i]) *
        100
      ).toFixed(2)
      turnoverArray.push(averageTurnover)
      turnoverArray = turnoverArray.map(parseFloat)
    }
  }

  const salesDigits = {
    order: 1,
    name: '銷售額',
    data: thisWeekIncome,
    color: '#7367f0',
  }
  const amountOfOrders = {
    order: 2,
    name: '訂單數',
    data: getAmountOfOrders,
    color: '#28c76f',
  }

  const averageMoneyPerOrder = {
    order: 4,
    name: '平均訂單金額',
    data: [...averageMoneyArray],
    color: '#ff9f43',
  }
  const noneRepeatVisitors = {
    order: 5,
    name: '不重複訪客',
    data: [170, 250, 300, 420, 288, 388, 217],
    color: '#00cfe8',
  }
  const pageViewsOfMerchants = {
    order: 6,
    name: '頁面瀏覽數',
    data: [436, 674, 700, 891, 603, 788, 567],
    color: '#e8cd00',
  }

  const turnOverPercentage = {
    order: 3,
    name: '下單轉換率',
    data: turnoverArray,
    color: '#ea5455',
  }

  const [series, setSeries] = useState([])
  const [durationDays, setDurationDays] = useState([...dateArray])
  useEffect(() => {
    getAmountOfOrdersAPI()
  }, [])

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-1">關鍵指標</Card.Title>
          <Row>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  console.log('1', series)
                  setSeries([...series, salesDigits])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('primary-top')
                  } else {
                    e.target.classList.toggle('primary-top')
                  }
                  series.forEach((item) => {
                    if (item.name === salesDigits.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== salesDigits.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, salesDigits])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">銷售額</div>
                <span className="dollar-sign">$</span>
                <span className="key-number">{totalThisWeek}</span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, amountOfOrders])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('success-top')
                  } else {
                    e.target.classList.toggle('success-top')
                  }
                  series.forEach((item) => {
                    if (item.name === amountOfOrders.name) {
                      console.log('3')
                      const checkRepeat = (item) =>
                        item.name !== amountOfOrders.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('4')
                      setSeries([...series, amountOfOrders])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">訂單</div>
                <span className="key-number">{getNumberOfTotalOrders}</span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, turnOverPercentage])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('danger-top')
                  } else {
                    e.target.classList.toggle('danger-top')
                  }
                  series.forEach((item) => {
                    if (item.name === turnOverPercentage.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== turnOverPercentage.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, turnOverPercentage])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">下單轉換率</div>
                <span className="key-number">
                  {(
                    turnOverPercentage.data.reduce((a, b) => {
                      return a + b
                    }, 0) / 7
                  ).toFixed(2)}
                </span>
                <span className="percentage-sign">%</span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, averageMoneyPerOrder])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('warning-top')
                  } else {
                    e.target.classList.toggle('warning-top')
                  }
                  series.forEach((item) => {
                    if (item.name === averageMoneyPerOrder.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== averageMoneyPerOrder.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, averageMoneyPerOrder])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">平均訂單金額</div>
                <span className="dollar-sign">$</span>
                <span className="key-number">
                  {averageMoneyPerOrder.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, noneRepeatVisitors])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('info-top')
                  } else {
                    e.target.classList.toggle('info-top')
                  }
                  series.forEach((item) => {
                    if (item.name === noneRepeatVisitors.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== noneRepeatVisitors.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, noneRepeatVisitors])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">不重複訪客數</div>
                <span className="key-number">
                  {noneRepeatVisitors.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
            <Col xs={2}>
              <div
                className="key-card"
                onClick={(e) => {
                  setSeries([...series, pageViewsOfMerchants])
                  if (e.target.classList[0] !== 'key-card') {
                    e.target.parentNode.classList.toggle('secondary-top')
                  } else {
                    e.target.classList.toggle('secondary-top')
                  }
                  series.forEach((item) => {
                    if (item.name === pageViewsOfMerchants.name) {
                      console.log('1')
                      const checkRepeat = (item) =>
                        item.name !== pageViewsOfMerchants.name
                      const newSeries = series.filter(checkRepeat)
                      setSeries([...newSeries])
                    } else if (series.indexOf(item) === -1) {
                      console.log('2')
                      setSeries([...series, pageViewsOfMerchants])
                    }
                    console.log(series)
                  })
                }}
              >
                <div className="key-title">商品頁面瀏覽數</div>
                <span className="key-number">
                  {pageViewsOfMerchants.data.reduce((a, b) => {
                    return a + b
                  }, 0)}
                </span>
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} className="card-shadow" style={{ padding: '2rem' }}>
              <KeyIndexChart
                initData={series.sort((a, b) => a.order - b.order)}
                durationDays={durationDays}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default KeyIndex
