import React from 'react'
import { Container } from 'react-bootstrap'

function DetailNav(props) {
  function getPosition(element) {
    let y = 0
    while (element) {
      y += element.offsetTop - element.scrollLeft + element.clientTop
      element = element.offsetParent
    }
    return y
  }

  function scrollTo(element) {
    let elemant = document.querySelector(element)
    let y = getPosition(elemant) - 145
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <div className="detail-nav font-s">
      <Container>
        <ul className="sticky-nav-item">
          <li>
            <a className="detail-nav-item" id="scrollToProductDetail">
              <span onClick={() => scrollTo('#productDetail')}>商品介紹</span>
            </a>
          </li>
          <li>
            <a className="detail-nav-item" id="scrollToDeliveryPayment">
              <span onClick={() => scrollTo('#deliveryPayment')}>
                運費與其他資訊
              </span>
            </a>
          </li>
          <li>
            <a className="detail-nav-item" id="scrollToReview">
              <span onClick={() => scrollTo('#review')}>購買評價</span>
            </a>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default DetailNav
