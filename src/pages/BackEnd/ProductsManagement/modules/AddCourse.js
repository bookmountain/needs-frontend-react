import React from 'react'
// import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

const AddCourse = (props) => {
  const { showAddCourse, setShowAddCourse } = props

  return (
    <>
      <Modal
        className="contractsModal"
        show={showAddCourse}
        onHide={(e) => setShowAddCourse(false)}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>實體商品上架</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-danger"
            onClick={(e) => setShowAddCourse(false)}
          >
            取消
          </Button>
          <Button variant="primary">確認</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCourse
