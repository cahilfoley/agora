import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import AppDrawer from './AppDrawer'
import { toggleDrawer } from 'actions/ui'

const mapStateToProps = ({ ui, router }) => ({
  dark: ui.dark,
  mobileOpen: ui.mobileDrawerOpen,
  currentPath: router.location.pathname
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
  navigateTo: path => dispatch(push(path))
})

export const Component = AppDrawer

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppDrawer)
