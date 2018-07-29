import makeActionCreator from 'utils/redux/makeActionCreator'

export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
export const TOGGLE_THEME = 'TOGGLE_THEME'
export const UPDATE_TITLE = 'UPDATE_TITLE'

export const toggleDrawer = makeActionCreator(TOGGLE_DRAWER)
export const toggleTheme = makeActionCreator(TOGGLE_THEME)
export const updateTitle = makeActionCreator(UPDATE_TITLE, 'pageTitle')

export default {
  toggleDrawer,
  toggleTheme,
  updateTitle
}
