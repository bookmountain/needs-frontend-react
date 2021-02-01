import React, { useState } from 'react'
import { Card, Tabs, Tab, Table } from 'react-bootstrap'

function CategoriesRank(props) {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title className="mb-1">分類排名</Card.Title>
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
                      <th>類別</th>
                      <th>銷售額</th>
                    </tr>
                  </thead>
                  <tbody className="rank-body">{props.dataTableForCate}</tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default CategoriesRank
