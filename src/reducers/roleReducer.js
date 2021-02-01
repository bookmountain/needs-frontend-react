import { roleTypes } from '../actions/actiontypes'

const initialState = {
  type: 'member',
}

export function handleRole(role = initialState, action) {
  switch (action.type) {
    case roleTypes.SET_MEMBER:
      return {
        ...role,
        type: 'member',
      }
    case roleTypes.SET_MERCHANT:
      return {
        ...role,
        type: 'merchant',
      }
    case roleTypes.SET_NEEDS:
      return {
        ...role,
        type: 'needs',
      }
    default:
      return role
  }
}
