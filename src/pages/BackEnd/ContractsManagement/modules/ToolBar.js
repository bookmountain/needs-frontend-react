import React from 'react'
import { useSelector } from 'react-redux'
import { Row, Button } from 'react-bootstrap'
import { AiOutlinePlus, AiOutlineAppstore, AiOutlineBars } from 'react-icons/ai'

const ToolBar = (props) => {
  const { type, setType, viewType, setViewType, toSignUp } = props
  return (
    <>
      <Row className="toolsSec my-3">
        <div className="productsType">
          <Button
            variant="light"
            className={type === 'all' ? 'actived' : ''}
            onClick={(e) => setType('all')}
          >
            全部
          </Button>
          <Button
            variant="light"
            className={type === 'ended' ? 'actived' : ''}
            onClick={(e) => setType('ended')}
          >
            已結束
          </Button>
        </div>
      </Row>
      <Row className="buttonSec my-3">
        <Button>
          <AiOutlinePlus size="30px" onClick={toSignUp} />
        </Button>
        <div className="viewSelect d-flex">
          <Button
            variant="light"
            className={`${viewType === 'grid' ? 'actived' : ''}`}
            onClick={(e) => setViewType('grid')}
          >
            <AiOutlineAppstore size="35px" />
          </Button>
          <Button
            variant="light"
            className={` ml-2 ${viewType === 'list' ? 'actived' : ''}`}
            onClick={(e) => setViewType('list')}
          >
            <AiOutlineBars size="40px" />
          </Button>
        </div>
      </Row>
    </>
  )
}

export default ToolBar
