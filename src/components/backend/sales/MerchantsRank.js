import React from 'react'
import { Card, Tabs, Tab, Table } from 'react-bootstrap'

function MerchantsRank(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-3">商品排名</Card.Title>
          <div className="rank-wrapper">
            <Tabs
              defaultActiveKey="saleMoney"
              id="uncontrolled-tab-example"
              className="mt-3 rank-tabs"
            >
              <Tab eventKey="saleMoney" title="銷售額">
                <Table borderless className="">
                  <thead className="rank-header">
                    <tr>
                      <th>排名</th>
                      <th>商品</th>
                      <th>銷售額</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">
                    {props.dataTableForRevenue}
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="saleDigit" title="售出件數">
                <Table borderless className="">
                  <thead className="rank-header">
                    <tr>
                      <th>排名</th>
                      <th>商品</th>
                      <th>售出件數</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">
                    {props.dataTableForAmount}
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default MerchantsRank
