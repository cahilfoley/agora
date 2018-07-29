import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// import CheckCircleIcon from '@material-ui/icons/CheckCircle'
// import ErrorIcon from '@material-ui/icons/Error'
// import InfoIcon from '@material-ui/icons/Info'
// import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Icon from '@material-ui/core/Icon'
import SnackbarContent from '@material-ui/core/SnackbarContent'
// import WarningIcon from '@material-ui/icons/Warning'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'

const variantIcon = {
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
  info: 'info'
}

const BaseToast = ({ classes, content, onClose, variant, ...other }) => {
  const icon = variantIcon[variant]

  return (
    <SnackbarContent
      className={classes[variant]}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)}>
            {icon}
          </Icon>
          {content}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <Icon className={classes.icon}>close</Icon>
        </IconButton>
      ]}
      {...other}
    />
  )
}

BaseToast.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired
}

export default withStyles(styles)(BaseToast)
