import { createReducer } from 'utils/redux'
import { HIDE_NOTIFICATION, SHOW_NOTIFICATION } from 'actions/notifications'

const defaultState = {
  snackbarOpen: false,
  toast: null
}

const handlers = {
  [SHOW_NOTIFICATION]: (state, { type, ...toast }) => ({
    ...state,
    snackbarOpen: true,
    toast
  }),
  [HIDE_NOTIFICATION]: (state, action) => ({
    ...state,
    snackbarOpen: false
  })
}

export default createReducer(handlers, defaultState)
