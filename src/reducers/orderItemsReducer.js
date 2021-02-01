import { REPLACE_ORDER_ITEMS } from '../actions/actiontypes'

export function orderContent(state = [], action) {
  switch (action.type) {
    case REPLACE_ORDER_ITEMS:
      return action.item
    default:
      return state
  }
}
