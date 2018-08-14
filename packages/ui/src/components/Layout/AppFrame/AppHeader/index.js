import { connect } from 'react-redux'
import { toggleDrawer, toggleTheme } from 'actions/ui'
import AppHeader from './AppHeader'

const mapStateToProps = ({ ui }) => ({
  dark: ui.darkTheme,
  title: ui.pageTitle
})

const mapDispatchToProps = dispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer()),
  toggleTheme: () => dispatch(toggleTheme())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader)
