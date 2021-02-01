// action = {
//     type "String"
//     payload:"Data"
// }

import { ADD_TO_FAVORITES, REMOVE_TO_FAVORITES } from '../actions/actiontypes'

// const initialState = [
//   {
//     id: 1,
//     title: 'LABAN CAMBRIDGE 劍橋鋼筆',
//     image_path: 'ST01_300x0.jpg',
//     price: 100,
//   },
// ]

export default function favoritesReducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAVORITES: {
      const product = action.payload
      const favorite = state

      const existingProductIndex = findProductIndex(favorite, product.id)

      const updatedfavoritesItem =
        existingProductIndex >= 0
          ? updateProductUnits(favorite, product)
          : [...favorite, product]

      return updatedfavoritesItem
    }

    case REMOVE_TO_FAVORITES: {
      const payload = action.payload
      let newfavorite = [...state]
      newfavorite = newfavorite.filter((favorite) => favorite.id !== payload)

      return newfavorite
    }

    default:
      break
  }

  return state
}

const findProductIndex = (favorite, productId) => {
  return favorite.findIndex((p) => p.id === productId)
}

const updateProductUnits = (favorite, product) => {
  const productIndex = findProductIndex(favorite, product.id)

  const updatedfavoritesItem = [...favorite]
  const existingProduct = updatedfavoritesItem[productIndex]

  const updatedUnitsProduct = {
    ...existingProduct,
  }
  updatedfavoritesItem[productIndex] = updatedUnitsProduct

  return updatedfavoritesItem
}
