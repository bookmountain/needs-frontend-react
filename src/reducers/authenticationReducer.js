import { userConstants } from '../actions/actiontypes'

let user = JSON.parse(sessionStorage.getItem('user'))
const initialState = user
  ? { loggedIn: true, user }
  : { loggedIn: false, user: {} }

export function authentication(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      }
    case userConstants.LOGIN_FAILURE:
      return { loggedIn: false }
    case userConstants.LOGOUT:
      return {}
    default:
      return state
  }
}
