import { REPLACE_ORDER_ID } from '../actions/actiontypes'

export function orderId(state = [], action) {
  switch (action.type) {
    case REPLACE_ORDER_ID:
      return action.item
    default:
      return state
  }
}
