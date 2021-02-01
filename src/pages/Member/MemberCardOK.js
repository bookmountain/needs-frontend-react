import React from 'react'
import MemSidebar from './memmodules/MemSidebar'
import MemCard from './memmodules/Memcard'
import './member.scss'

function MemberCard(props) {
  return (
    <>
      <div className="container member">
        <div className="row my-3">
          <div className="col-lg-2 col-sm-1">
            <MemSidebar {...props} />
          </div>
          <div className="col-lg-10 col-sm-12">
            <MemCard {...props} />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberCard
