import { combineReducers } from 'redux'
import { authentication } from './authenticationReducer'
import { alert } from './alertReducer'
import { handleRole } from './roleReducer'
import { orderContent } from './orderItemsReducer'
import { orderId } from './orderIdReducer'
import { cartAmount } from './cartAmountReducer'

import cartReducer from './cartReducer'
import favoritesReducer from './favoritesReducer'

export const rootReducer = combineReducers({
  authentication,
  handleRole,
  alert,
  orderContent,
  orderId,
  cartAmount,
  cart: cartReducer,
  favorite: favoritesReducer,
})
