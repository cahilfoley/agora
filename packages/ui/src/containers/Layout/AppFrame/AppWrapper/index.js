import { connect } from 'react-redux'
import AppWrapper from './AppWrapper'
import { hideNotification } from 'actions/notifications'

const mapStateToProps = ({ notifications }) => ({
  snackbarOpen: notifications.snackbarOpen,
  toast: notifications.toast
})

const mapDispatchToProps = dispatch => ({
  hideNotification: () => dispatch(hideNotification())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppWrapper)
