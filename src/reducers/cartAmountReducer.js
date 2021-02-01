import { REPLACE_CART_AMOUNT } from '../actions/actiontypes'
let amount = 0
let cart = 0
localStorage.getItem('cart')
  ? (cart = [...JSON.parse(localStorage.getItem('cart') || '[]')])
  : (cart = 0)
cart != 0
  ? cart.forEach((item) => {
      amount += item.amount
    })
  : (amount = 0)
export function cartAmount(state = amount, action) {
  switch (action.type) {
    case REPLACE_CART_AMOUNT:
      return action.value
    default:
      return state
  }
}
