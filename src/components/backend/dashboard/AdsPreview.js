import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import ads1 from '../../../pages/BackEnd/Dashboard/images/ads1.jpg'

function AdsPreview() {
  return (
    <>
      {' '}
      <Card>
        <Card.Body>
          <Card.Title className="mb-0">廣告活動</Card.Title>
          <div className="dashboard-ads">
            <img className="ad-img" src={ads1} alt="" />
            <div className="ad-info">
              <div className="ad-info-header">
                <div className="ad-title">居家換季 收納質感</div>
                {/* <div className="ad-type">首頁輪播</div> */}
              </div>
              <div className="ad-duration">10月12日-10月14日</div>
              <div className="ad-more-info">
                <Link to="#">廣告詳情</Link>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default AdsPreview
