import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Snackbar from 'components/Notifications/Snackbar'
import styles from './styles'

const AppWrapper = ({
  children,
  classes,
  hideNotification,
  snackbarOpen,
  toast
}) => {
  return (
    <div className={classes.root}>
      <Snackbar open={snackbarOpen} toast={toast} onClose={hideNotification} />
      {children}
    </div>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  hideNotification: PropTypes.func.isRequired,
  snackbarOpen: PropTypes.bool.isRequired,
  toast: PropTypes.object
}

export default withStyles(styles)(AppWrapper)
