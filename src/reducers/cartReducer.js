// action = {
//     type "String"
//     payload:"Data"
// }

import { ADD_TO_CART, UPDATE_CART_UNITS } from '../actions/actiontypes'

// const initialState = [
//   {
//     id: 1,
//     title: 'LABAN CAMBRIDGE 劍橋鋼筆',
//     image_path: 'ST01_300x0.jpg',
//     price: 100,
//     sale_price: 99,
//     units: 2,
//   },
// ]

export default function cartReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload
      const cart = state

      const existingProductIndex = findProductIndex(cart, product.id)

      const updatedCart =
        existingProductIndex >= 0
          ? updateProductUnits(cart, product)
          : [...cart, product]

      return updatedCart
    }

    case UPDATE_CART_UNITS: {
      const payload = action.payload
      const cart = state

      const existingProductIndex = findProductIndex(cart, payload.id)

      if (existingProductIndex >= 0) {
        let product = cart[existingProductIndex]
        product.units = payload.units
        product.price = payload.price

        cart[existingProductIndex] = product
      }
      return [...cart]
    }

    default:
      break
  }

  return state
}

const findProductIndex = (cart, productId) => {
  return cart.findIndex((p) => p.id === productId)
}

const updateProductUnits = (cart, product) => {
  const productIndex = findProductIndex(cart, product.id)

  const updatedCart = [...cart]
  const existingProduct = updatedCart[productIndex]

  const updatedUnitsProduct = {
    ...existingProduct,
    units: existingProduct.units + product.units,
  }
  updatedCart[productIndex] = updatedUnitsProduct

  return updatedCart
}
