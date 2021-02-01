import React, { useState } from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/MemCard'
import './member.scss'
import '../../../src/assets/img/member/arrow.png'

function MemberCard(props) {
  const [showsidebar, setShowsidebar] = useState(false)
  // const [btntype,setBtntype] = useState(true)
  const hiddenSidebar = () => {
    setShowsidebar(!showsidebar)
  }

  return (
    <>
      <img
        src={require('../../../src/assets/img/member/arrow.png')}
        className={showsidebar ? 'hiddenBtn' : 'hiddenBtn mirrorRotateLevel'}
        onClick={hiddenSidebar}
      ></img>

      <div className="container member">
        <div className="row my-3 d-flex">
          <div
            className="col-lg-2 hiddenBar"
            style={{
              transition: 'all .3s ease',
              transform: showsidebar ? 'translateX(-300px)' : 'translateX(0px)',
            }}
          >
            <MemSidebar {...props} />
          </div>

          <div className="col-lg-10">
            <MemCard {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCard
