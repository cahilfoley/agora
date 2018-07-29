import { createReducer } from 'utils/redux'
import { TOGGLE_DRAWER, TOGGLE_THEME, UPDATE_TITLE } from 'actions/ui'

const defaultState = {
  darkTheme: true,
  mobileDrawerOpen: false,
  pageTitle: 'Home'
}

const handlers = {
  [TOGGLE_DRAWER]: (state, action) => ({
    ...state,
    mobileDrawerOpen: !state.mobileDrawerOpen
  }),
  [TOGGLE_THEME]: (state, action) => ({
    ...state,
    darkTheme: !state.darkTheme
  }),
  [UPDATE_TITLE]: (state, { pageTitle }) => ({
    ...state,
    pageTitle: pageTitle
  })
}

export default createReducer(handlers, defaultState)
