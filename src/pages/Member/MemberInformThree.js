import React, { useState } from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemuInformThree from './memmodules/MemInformThree'
import './member.scss'

function MemberInform() {
  const [showsidebar, setShowsidebar] = useState(false)
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
            <MemSidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemuInformThree />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberInform
