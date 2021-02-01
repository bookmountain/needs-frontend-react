import React from 'react'
import { Modal } from 'react-bootstrap'
import { BiCheckCircle } from 'react-icons/bi'

function SuccessModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="text-center mt-3 pb-3">
          <BiCheckCircle style={{ fontSize: '80px', color: '#28a745' }} />
        </div>
        <p className="text-center mb-3">商品已放入購物車</p>
      </Modal.Body>
    </Modal>
  )
}
export default SuccessModal
