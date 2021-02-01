import React from 'react'
import { Form } from 'react-bootstrap'

const SpecItem = (props) => {
  const { formData, handleSetForm, index } = props

  return (
    <>
      <Form.Control
        type="text"
        value={formData[`specification${index}`]}
        onChange={(e) => handleSetForm(e, `specification${index}`)}
      />
    </>
  )
}

export default SpecItem
