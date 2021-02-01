import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { userActions, roleActions, alertActions } from '../../actions'
import MerchantSignUp from './modules/MerchantSignUp'
import MemberSignUp from './modules/MemberSignUp'

const SignUp = (props) => {
  const dispatch = useDispatch()
  const { error } = alertActions
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({})
  const selectedRole = useSelector((state) => state.handleRole.type)
  const alertMsg = useSelector((state) => state.alert.message)

  const handleSetForm = (e, key) => {
    const value = e.target.value
    setFormData({ ...formData, [key]: value })
  }

  return (
    <>
      {selectedRole === 'member' ? (
        <MemberSignUp
          submitted={submitted}
          setSubmitted={setSubmitted}
          formData={formData}
          handleSetForm={handleSetForm}
          selectedRole={selectedRole}
          setMember={props.setMember}
          setMerchant={props.setMerchant}
          setNeeds={props.setNeeds}
          alertMsg={alertMsg}
          error={error}
        />
      ) : (
        <MerchantSignUp />
      )}
    </>
  )
}

const mapStateToProps = (store) => {
  const { type } = store.handleRole
  return { type }
}

const actionCreators = {
  login: userActions.login,
  logout: userActions.logout,
  setMember: roleActions.setMember,
  setMerchant: roleActions.setMerchant,
  setNeeds: roleActions.setNeeds,
  clear: alertActions.clear,
}

export default connect(mapStateToProps, actionCreators)(SignUp)
