import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const AppContent = ({ children, classes, noContentPadding }) => {
  return (
    <div className={classes.root} style={{ padding: noContentPadding || 24 }}>
      {children}
    </div>
  )
}

AppContent.propTypes = {
  /** Child component to be rendered as app content */
  children: PropTypes.node.isRequired,
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** Flag to disable padding of the app content */
  noContentPadding: PropTypes.bool
}

export default withStyles(styles)(AppContent)
