import React from 'react'
import { Form } from 'react-bootstrap'
import { FiPlusCircle } from 'react-icons/fi'

const Spec = (props) => {
  const { formData, handleSetForm, specCount, createSpec } = props

  let childProp = { specCount, formData, handleSetForm }

  return (
    <>
      <Form.Group controlId="specification">
        <Form.Label>商品規格</Form.Label>
        <div className="input-group">
          {React.Children.map(props.children, (child) => {
            return React.cloneElement(child, childProp)
          })}
          <FiPlusCircle
            size="25px"
            style={{ color: '#495057' }}
            onClick={() => createSpec()}
          />
        </div>
      </Form.Group>
    </>
  )
}

export default Spec
