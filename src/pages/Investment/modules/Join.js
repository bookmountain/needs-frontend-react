import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { useTransition, animated } from 'react-spring'

const Join = ({ show, aniRef }) => {
  useEffect(() => {}, [show])
  const transitions = useTransition(show, null, {
    config: { duration: 1800 },
    from: { transform: 'translateY(150px)', opacity: 0 },
    enter: { transform: 'translateY(0px)', opacity: 1 },
  })
  return (
    <div className="container-fluid joinSec" ref={aniRef}>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div key={key} style={props} className="joinContent">
              <span>立即申請加入 NEEDS！</span>
              <span>
                馬上開始填寫申請表，加入這些優秀設計品牌的行列，和
                NEEDS一起為你的品牌開啓新的歷程吧！
              </span>
              <Button variant="light">立即開店 →</Button>
            </animated.div>
          )
      )}
    </div>
  )
}

export default Join
