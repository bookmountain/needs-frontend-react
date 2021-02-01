import React from 'react'
import { animated, useTrail } from 'react-spring'

const BrandList = ({ show, BrandData, aniRef }) => {
  const trail = useTrail(BrandData.length, {
    config: { duration: 1800 },
    from: { opacity: 0 },
    ...(show && { to: { opacity: 1 } }),
  })

  return (
    <>
      <div className="container brandListSec" ref={aniRef}>
        <div className="secTitle">
          <h4>已加入NEEDS品牌</h4>
          <span>超過100個優秀設計品牌已加入NEEDS</span>
        </div>
        <div className="brandContent">
          {trail.map((props, index) => {
            const item = BrandData[index]
            return (
              <animated.div key={item.id} style={props} className="brandInfo">
                <img
                  src={require(`@assets/img/investment/${item.imgName}`)}
                  alt={item.brandName}
                  className="brandLogo"
                />
                <p className="brandName">{item.brandName}</p>
              </animated.div>
            )
          })}

          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
        </div>
      </div>
    </>
  )
}

export default BrandList
