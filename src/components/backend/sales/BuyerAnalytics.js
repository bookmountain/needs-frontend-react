import React, { useState } from 'react'
import BuyerChart from '../../../components/backend/sales/charts/BuyerChart.js'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import {
  Row,
  Col,
  Card,
  OverlayTrigger,
  Tooltip,
  Button,
} from 'react-bootstrap'

function BuyerAnalytics() {
  return (
    <>
      <Card className="mt-3">
        <Card.Body>
          <Card.Title className="mb-3">買家分析</Card.Title>
          <Row>
            <Col xs={6}>
              <div className="buyer-chart-wrapper">
                <BuyerChart></BuyerChart>
              </div>
            </Col>
            <Col xs={6}>
              <Row className="buyers-row">
                <Col xs={4}>
                  <div className="buyer-wrapper">
                    <div className="buyers-state">全部買家</div>
                    <div className="buyers-question">
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`} className="tooltips">
                            在選定的時間內完成訂單的不重複買家總數。
                          </Tooltip>
                        }
                      >
                        <AiOutlineQuestionCircle className="questionMark" />
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="buyers-figures">240</div>
                </Col>
                <Col xs={4}>
                  <div className="buyer-wrapper">
                    <div className="buyers-state">新買家</div>
                    <div className="buyers-question">
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`} className="tooltips">
                            在選定的時間內，不重複的新買家總數。如果買家在選定的時間之前的12個月內沒有從您的賣場收到任何完成的訂單，那麼他就是新買家。
                          </Tooltip>
                        }
                      >
                        <AiOutlineQuestionCircle className="questionMark" />
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="buyers-figures">210</div>
                </Col>
                <Col xs={4}>
                  <div className="buyer-wrapper">
                    <div className="buyers-state">老顧客</div>
                    <div className="buyers-question">
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`} className="tooltips">
                            在選定的時間內，現有不重複買家的總數。現有買家在指定時間之前的12個月內，已從您的賣場完成至少1個訂單。
                          </Tooltip>
                        }
                      >
                        <AiOutlineQuestionCircle className="questionMark" />
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="buyers-figures">30</div>
                </Col>
              </Row>
              <hr />
              <Row className="buyers-row">
                <Col xs={4}>
                  <div className="buyer-wrapper">
                    <div className="buyers-state">潛在買家</div>
                    <div className="buyers-question">
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`} className="tooltips">
                            在選定的時間內，潛在買家的總數。潛在買家是指在選定的時間內已將商品增加到購物車或喜歡您商店中的產品，但尚未完成任何訂單的人。
                          </Tooltip>
                        }
                      >
                        <AiOutlineQuestionCircle className="questionMark" />
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="buyers-figures">630</div>
                </Col>
                <Col xs={4}>
                  <div className="buyer-wrapper">
                    <div className="buyers-state">回購率</div>
                    <div className="buyers-question">
                      <OverlayTrigger
                        key="top"
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-top`} className="tooltips">
                            全部買家除以老顧客之比例
                          </Tooltip>
                        }
                      >
                        <AiOutlineQuestionCircle className="questionMark" />
                      </OverlayTrigger>
                    </div>
                  </div>
                  <div className="buyers-figures">
                    {((30 / (210 + 30)) * 100).toFixed(2)} %
                  </div>
                </Col>
                <Col xs={4}>
                  <div className="buyers-state"></div>
                  <div className="buyers-figures"></div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  )
}

export default BuyerAnalytics
