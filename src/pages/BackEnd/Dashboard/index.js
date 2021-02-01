import React, { useEffect, useState } from 'react'
import './styles/index.scss'
import SocialMediaChart from '../../../components/backend/dashboard/charts/SocialMedia'
import BrowseChart from '../../../components/backend/dashboard/charts/Browse'
import SalesChart from '../../../components/backend/dashboard/charts/Sales'
import TurnoverChart from '../../../components/backend/dashboard/charts/Turnover'
import RevenueChart from '../../../components/backend/dashboard/charts/Revenue'
import Review from '../../../components/backend/dashboard/Review'
import DispatchStatus from '../../../components/backend/dashboard/DispatchStatus'
import DispatchContent from '../../../components/backend/dashboard/DispatchContent'
import AdsCalendar from '../../../components/backend/dashboard/AdsCalendar'
import AdsPreview from '../../../components/backend/dashboard/AdsPreview'
import { Col, Container, Row } from 'react-bootstrap'
import moment from 'moment'
import 'moment/locale/zh-tw'
import Axios from 'axios'

function Dashboard() {
  let dateArray = []
  for (let i = 0; i < 7; i++) {
    let date = moment().subtract(i, 'days').format('MMM Do')
    dateArray.push(date)
  }
  dateArray = dateArray.reverse()
  const [durationDays, setDurationDays] = useState([...dateArray])
  const [numberOfFans, setNumberOfFans] = useState()
  const [totalFans, setTotalFans] = useState()
  const [numberOfBrowse, setNumberOfBrowse] = useState()
  const [totalBrowse, setTotalBrowse] = useState()
  const [totalTurnover, setTotalTurnover] = useState()
  const [avgTurnover, setAvgTurnover] = useState()

  const [thisWeekIncome, setThisWeekIncome] = useState()
  const [totalThisWeek, setTotalThisWeek] = useState()
  const [lastWeekIncome, setLastWeekIncome] = useState()
  const [totalLastWeek, setTotalLastWeek] = useState()

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
          console.log(incomeToday)
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

  const getDashboardData = () => {
    Axios.get('http://localhost:5000/dashboard/data').then((response) => {
      const data = response.data
      let numberOfFansArray = []
      let totalFans = 0
      let numberOfBrowseArray = []
      let totalBrowse = 0
      let turnoverArray = []
      let avgTurnover = 0
      for (let i = 0; i < data.length; i++) {
        numberOfFansArray.push(data[i].number_fans)
        totalFans = parseInt(totalFans + data[i].number_fans)
        numberOfBrowseArray.push(data[i].number_browse)
        totalBrowse = parseInt(totalBrowse + data[i].number_browse)
        turnoverArray.push(
          ((data[i].number_order / data[i].number_browse) * 100).toFixed(1)
        )
        turnoverArray = turnoverArray.map(parseFloat)
      }
      for (let i = 0; i < turnoverArray.length; i++) {
        avgTurnover = avgTurnover + turnoverArray[i]
      }
      avgTurnover = (avgTurnover / 7).toFixed(2)
      setTotalTurnover(turnoverArray)
      setAvgTurnover(avgTurnover)
      setTotalFans(totalFans)
      setNumberOfFans(numberOfFansArray)
      setTotalBrowse(totalBrowse)
      setNumberOfBrowse(numberOfBrowseArray)
    })
  }

  // const getThisIncome = () => {
  //   Axios.get('http://localhost:5000/dashboard/incomethisweek').then(
  //     (response) => {
  //       const data = response.data
  //       let thisWeekIncomeArray = []
  //       let totalThisWeek = 0
  //       for (let i = 0; i < data.length; i++) {
  //         thisWeekIncomeArray.push(data[i].income)
  //         totalThisWeek = totalThisWeek + thisWeekIncomeArray[i]
  //       }
  //       // console.log(thisWeekIncomeArray)
  //       setThisWeekIncome(thisWeekIncomeArray)
  //       setTotalThisWeek(totalThisWeek)
  //     }
  //   )
  // }

  const getLastIncome = () => {
    Axios.get('http://localhost:5000/dashboard/incomelastweek').then(
      (response) => {
        const data = response.data
        let lastWeekIncomeArray = []
        let totalLastWeek = 0
        for (let i = 0; i < data.length; i++) {
          lastWeekIncomeArray.push(data[i].income)
          totalLastWeek = totalLastWeek + lastWeekIncomeArray[i]
        }
        // console.log(thisWeekIncomeArray)
        setLastWeekIncome(lastWeekIncomeArray)
        setTotalLastWeek(totalLastWeek)
      }
    )
  }

  useEffect(() => {
    getDashboardData()
    // getThisIncome()
    getLastIncome()
    getAmountOfOrdersAPI()
  }, [])

  return (
    <>
      <div className="dashboard-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <Row className="my-3">
              {' '}
              <Col xs={3}>
                <SocialMediaChart
                  durationDays={durationDays}
                  numberOfFans={numberOfFans}
                  totalFans={totalFans}
                />
              </Col>
              <Col xs={3}>
                <BrowseChart
                  durationDays={durationDays}
                  numberOfBrowse={numberOfBrowse}
                  totalBrowse={totalBrowse}
                />
              </Col>
              <Col xs={3}>
                <SalesChart
                  durationDays={durationDays}
                  getAmountOfOrders={getAmountOfOrders}
                  getNumberOfTotalOrders={getNumberOfTotalOrders}
                />
              </Col>
              <Col xs={3}>
                <TurnoverChart
                  durationDays={durationDays}
                  totalTurnover={totalTurnover}
                  avgTurnover={avgTurnover}
                />
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={8}>
                <RevenueChart
                  thisWeekIncome={thisWeekIncome}
                  lastWeekIncome={lastWeekIncome}
                  totalThisWeek={totalThisWeek}
                  totalLastWeek={totalLastWeek}
                  durationDays={durationDays}
                />
              </Col>{' '}
              <Col xs={4}>
                <Review />
              </Col>
            </Row>
            <Row className="my-3 dispatch-status">
              <Col xs={3}>
                <DispatchStatus />
              </Col>
              <Col xs={9}>
                <DispatchContent />
              </Col>
            </Row>
            <Row className="my-3 dispatch-status">
              <Col xs={12}>
                <div className="card">
                  <AdsCalendar />
                </div>
              </Col>
              {/* <Col xs={6}>
                <AdsPreview />
              </Col> */}
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Dashboard
