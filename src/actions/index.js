import {
  userConstants,
  roleTypes,
  alertConstants,
  REPLACE_ORDER_ITEMS,
  REPLACE_ORDER_ID,
  REPLACE_CART_AMOUNT,
  ADD_TO_CART,
  UPDATE_CART_UNITS,
  ADD_TO_FAVORITES,
  REMOVE_TO_FAVORITES,
} from './actiontypes'

import History from '../components/history'
export const userActions = { login, logout }
export const roleActions = { setMember, setMerchant, setNeeds }
export const alertActions = { success, error, clear }

// login action
function login(username, password, selectedRole) {
  return (dispatch) => {
    checkAuth(username, password, selectedRole).then((user) => {
      if (!user.success) {
        dispatch(failure())
        dispatch(error('帳號或密碼錯誤'))
      } else {
        sessionStorage.setItem('user', JSON.stringify(user))
        dispatch(clear())
        dispatch(success(user))
        if (selectedRole === 'member') {
          History.goBack()
        } else {
          window.location.href = '/'
        }
      }
    })
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure() {
    return { type: userConstants.LOGIN_FAILURE }
  }
}

const checkAuth = (username, password, selectedRole) => {
  const url = `http://localhost:5000/login-api/${selectedRole}login`
  const req = new Request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  return fetch(req)
    .then(handleResponse)
    .then((user) => {
      return user
    })
}

function handleResponse(response) {
  return response.json().then((obj) => {
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        console.log('401')
        logout()
      }
      const error = response.statusText
      return Promise.reject(error)
    }
    return obj
  })
}

// logout action
function logout() {
  sessionStorage.removeItem('user')
  window.location.href = '/'
  return { type: userConstants.LOGOUT }
}

// setRole action
function setMember() {
  return (dispatch) => {
    dispatch(clear())
    dispatch(member())
  }
  function member() {
    return { type: roleTypes.SET_MEMBER }
  }
}

function setMerchant() {
  return (dispatch) => {
    dispatch(clear())
    dispatch(merchant())
  }

  function merchant() {
    return { type: roleTypes.SET_MERCHANT }
  }
}

function setNeeds() {
  return (dispatch) => {
    dispatch(clear())
    dispatch(needs())
  }

  function needs() {
    return { type: roleTypes.SET_NEEDS }
  }
}

// alert actions
function success(message) {
  return { type: alertConstants.SUCCESS, message }
}

function error(message) {
  return { type: alertConstants.ERROR, message }
}

function clear() {
  return { type: alertConstants.CLEAR }
}

// orderItems
export function replaceOrderContent(item) {
  return (dispatch) => {
    dispatch(orderContent(item))
  }

  function orderContent(item) {
    return { type: REPLACE_ORDER_ITEMS, item }
  }
}
// orderId
export function replaceOrderId(item) {
  return (dispatch) => {
    dispatch(orderId(item))
  }

  function orderId(item) {
    return { type: REPLACE_ORDER_ID, item }
  }
}
// cartAmount
export function replaceCartAmount(value) {
  return (dispatch) => {
    dispatch(cartAmount(value))
  }

  function cartAmount(value) {
    return { type: REPLACE_CART_AMOUNT, value }
  }
}

// cart action
export function addToCartAction({
  id,
  title,
  brand_name,
  image_path,
  price,
  sale_price,
  e_points_usable,
}) {
  return {
    type: ADD_TO_CART,
    payload: {
      id,
      title,
      brand_name,
      image_path,
      price,
      sale_price,
      e_points_usable,
    },
  }
}
export function updateCartUnits({ id, units, price }) {
  return {
    type: UPDATE_CART_UNITS,
    payload: { id, units, price },
  }
}

// add Favorite

export function addToFavoritesItem({ id, title, image_path, price }) {
  return {
    type: ADD_TO_FAVORITES,
    payload: { id, title, image_path, price },
  }
}
export function removeToFavoritesItem(id) {
  return {
    type: REMOVE_TO_FAVORITES,
    payload: id,
  }
}
