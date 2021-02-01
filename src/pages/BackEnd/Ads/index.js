import React, { useState, useEffect } from 'react'
import './styles/index.scss'
import { Col, Container, Row, Card } from 'react-bootstrap'
import AdsPreview from '../../../components/backend/ads/AdsPreview'
import InProgressAds from '../../../components/backend/ads/InProgressAds'
import CTR from '../../../components/backend/ads/charts/CTR'
import CTRBar from '../../../components/backend/ads/charts/CTRBar'
import CPCPie from '../../../components/backend/ads/charts/CPCPie'
import AdsCalendar from '../../../components/backend/dashboard/AdsCalendar'
import Axios from 'axios'
import moment from 'moment'
import 'moment/locale/zh-tw'

function Ads() {
  const [adsDataTable, setDataTable] = useState([])
  const [totalCost, setTotalCost] = useState('')
  const [totalBudget, setTotalBudget] = useState('')
  const [costPercentage, setCostPercentage] = useState('')
  const [clicks, setClicks] = useState('')
  const [impression, setImpression] = useState('')
  const [getCtr, setGetCtr] = useState('')
  const [imgPre, setImgPre] = useState('')

  const [productTitle1, setProductTitle1] = useState('')
  const [productOutline1, setProductOutline1] = useState('')
  const [productImg1, setProductImg1] = useState('')

  const [productTitle2, setProductTitle2] = useState('')
  const [productOutline2, setProductOutline2] = useState('')
  const [productImg2, setProductImg2] = useState('')

  const [productTitle3, setProductTitle3] = useState('')
  const [productOutline3, setProductOutline3] = useState('')
  const [productImg3, setProductImg3] = useState('')

  const getDataTable = () => {
    Axios.get('http://localhost:5000/dashboard/adsinprogress').then(
      (response) => {
        const data = response.data
        let adsDataTable = []
        let startDateArray = []
        let endDateArray = []
        let durationDays = ''
        let durationDaysArray = []
        for (let i = 0; i < data.length; i++) {
          let startDate = data[i].start_date
          let endDate = data[i].end_date
          startDate = moment(startDate)
          endDate = moment(endDate)
          durationDays = endDate.diff(startDate, 'days')
          durationDaysArray.push(durationDays)
          startDate = moment(startDate).format('MMM Do YY')
          endDate = moment(endDate).format('MMM Do YY')
          startDateArray.push(startDate)
          endDateArray.push(endDate)
          adsDataTable.push(
            <>
              <tr
                data-sid={data[i].sid}
                onClick={() => {
                  getCtrData(data[i].sid)
                  getSum(data[i].sid)
                  getProduct1(data[i].sid)
                  getProduct2(data[i].sid)
                  getProduct3(data[i].sid)
                }}
              >
                <td>{data[i].title_ads}</td>
                <td>{data[i].bid}</td>
                <td>{startDateArray[i]}</td>
                <td>{endDateArray[i]}</td>
                <td>{durationDaysArray[i]}</td>
              </tr>
            </>
          )
        }
        setDataTable(adsDataTable)

        const getCtrData = (sid) => {
          Axios.get('http://localhost:5000/dashboard/adsinprogressforctr').then(
            (response) => {
              const data = response.data
              let clicksArray = []
              let impressionArray = []
              let ctrArray = []
              let ctr = ''
              let imgPreArray = []
              for (let i = 0; i < data.length; i++) {
                if (sid === data[i].ads_id) {
                  clicksArray.push(data[i].clicks_day)
                  impressionArray.push(data[i].impressions_day)
                  ctr = (data[i].clicks_day / data[i].impressions_day) * 100
                  ctr = ctr.toFixed(1)
                  ctrArray.push(ctr)
                }
                if (sid === data[i].sid) {
                  imgPreArray.push(data[i].img)
                  setImgPre(imgPreArray[0])
                }
              }
              setClicks(clicksArray)
              setImpression(impressionArray)
              setGetCtr(ctrArray)
            }
          )
        }

        const getSum = (sid) => {
          Axios.get('http://localhost:5000/dashboard/adsinprogressforsum').then(
            (response) => {
              const data = response.data

              for (let i = 0; i < data.length; i++) {
                if (sid === data[i].ads_id) {
                  setTotalCost(data[i].total_clicks_day * data[i].bid)
                  setTotalBudget(data[i].budget)
                  let costPercentage =
                    ((data[i].total_clicks_day * data[i].bid) /
                      data[i].budget) *
                    100
                  costPercentage = costPercentage.toFixed(1)
                  setCostPercentage(costPercentage)
                } else if (sid > 3) {
                  setTotalCost(0)
                  setTotalBudget(1000)
                  setCostPercentage(0)
                }
              }
            }
          )
        }

        const getProduct1 = (sid) => {
          Axios.get('http://localhost:5000/dashboard/adsforproduct1').then(
            (response) => {
              const data = response.data
              for (let i = 0; i < data.length; i++) {
                if (sid === data[i].sid) {
                  setProductTitle1(data[i].title)
                  let productImage1
                  productImage1 = data[i].image_path.split(',')
                  setProductImg1(productImage1[0])
                  setProductOutline1(data[i].outline)
                }
              }
            }
          )
        }

        const getProduct2 = (sid) => {
          Axios.get('http://localhost:5000/dashboard/adsforproduct2').then(
            (response) => {
              const data = response.data
              for (let i = 0; i < data.length; i++) {
                if (sid === data[i].sid) {
                  setProductTitle2(data[i].title)
                  let productImage2
                  productImage2 = data[i].image_path.split(',')
                  setProductImg2(productImage2[0])
                  setProductOutline2(data[i].outline)
                }
              }
            }
          )
        }

        const getProduct3 = (sid) => {
          Axios.get('http://localhost:5000/dashboard/adsforproduct3').then(
            (response) => {
              const data = response.data
              for (let i = 0; i < data.length; i++) {
                if (sid === data[i].sid) {
                  setProductTitle3(data[i].title)
                  let productImage3
                  productImage3 = data[i].image_path.split(',')
                  setProductImg3(productImage3[0])
                  setProductOutline3(data[i].outline)
                }
              }
            }
          )
        }
      }
    )
  }

  useEffect(() => {
    getDataTable()
  }, [])
  let dateArray = []
  for (let i = 0; i < 7; i++) {
    let date = moment().subtract(i, 'days').format('MMM Do')
    dateArray.push(date)
  }
  dateArray = dateArray.reverse()
  const [durationDays, setDurationDays] = useState([...dateArray])

  return (
    <>
      <div className="ads-wrapper">
        <Col className="main offset-2" xs={10}>
          <Container fluid className="main-bg">
            <Row className="my-3">
              <Col xs={8}>
                <AdsPreview
                  imgPre={imgPre}
                  productTitle1={productTitle1}
                  productImg1={productImg1}
                  productOutline1={productOutline1}
                  productTitle2={productTitle2}
                  productImg2={productImg2}
                  productOutline2={productOutline2}
                  productTitle3={productTitle3}
                  productImg3={productImg3}
                  productOutline3={productOutline3}
                ></AdsPreview>
              </Col>
              <Col xs={4}>
                <Card>
                  <Card.Body
                    style={{ paddingBottom: '0', height: 'calc(100% + 200px)' }}
                  >
                    <Card.Title className="mb-3">成本</Card.Title>
                    <CPCPie
                      totalCost={totalCost}
                      totalBudget={totalBudget}
                      costPercentage={costPercentage}
                    ></CPCPie>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={12}>
                <InProgressAds adsDataTable={adsDataTable} />
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-3">曝光/點擊次數</Card.Title>
                    <CTR
                      durationDays={durationDays}
                      clicks={clicks}
                      impression={impression}
                    ></CTR>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6}>
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-3">Click Through Rate</Card.Title>
                    <CTRBar
                      durationDays={durationDays}
                      getCtr={getCtr}
                    ></CTRBar>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="my-3">
              <Col xs={12}>
                <Card>
                  <Card.Body>
                    <Card.Title className="mb-3">活動日期</Card.Title>
                    <AdsCalendar />
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Col>
      </div>
    </>
  )
}

export default Ads
