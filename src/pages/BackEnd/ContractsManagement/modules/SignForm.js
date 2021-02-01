import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import StepBar from './StepBar'
import Form1 from './Form1'

const SignForm = (props) => {
  const { showSignUp, setShowSignUp } = props
  const [stepIndex, setStepIndex] = useState(1)

  const toStep = (val) => {
    switch (val) {
      default:
        return <Form1 />
    }
  }

  useEffect(() => {
    toStep(stepIndex)
  }, [stepIndex])

  return (
    <>
      {showSignUp ? (
        <Modal
          className="contractsModal"
          show={showSignUp}
          onHide={(e) => setShowSignUp(false)}
          backdrop="static"
          keyboard={false}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title>與平台簽約</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <StepBar stepIndex={stepIndex} setStepIndex={setStepIndex} />
            {toStep(stepIndex)}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-danger"
              onClick={(e) => setShowSignUp(false)}
            >
              取消
            </Button>
            <Button
              variant="primary"
              onClick={(e) => setStepIndex(stepIndex + 1)}
            >
              下一步
            </Button>
            <span>
              點擊確認簽約代表您同意NEEDS之<a href="">商家服務政策與費用</a>
            </span>
          </Modal.Footer>
        </Modal>
      ) : (
        <></>
      )}
    </>
  )
}

export default SignForm
