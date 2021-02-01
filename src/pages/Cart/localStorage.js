export function getCartItems() {
  return [...JSON.parse(localStorage.getItem('cart') || '[]')]
}

export function addCartItem(cartItems, newCartItem) {
  const existedIndex = cartItems.findIndex(
    (item) => item.skuid === newCartItem.skuid
  )
  if (existedIndex === -1) {
    cartItems.push(newCartItem)
  } else {
    cartItems[existedIndex].amount += newCartItem.amount
  }
  return cartItems
}

export function replaceCartItem(cartItems, newCartItem) {
  cartItems = cartItems.map((item) => {
    if (item.skuid === newCartItem.skuid) {
      item.amount = newCartItem.amount
    }
    return item
  })
  return cartItems
}

export function saveCartItems(cartItems) {
  localStorage.setItem('cart', JSON.stringify(cartItems))
}
