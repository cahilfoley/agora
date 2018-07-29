import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from '@material-ui/core/Snackbar'

class SnackbarWrapper extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    horizontal: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    vertical: PropTypes.oneOf(['top', 'center', 'bottom']).isRequired
  }

  static defaultProps = {
    horizontal: 'center',
    vertical: 'bottom'
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.props.onClose()
  }

  render() {
    const { children, horizontal, open, vertical } = this.props

    return (
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={6000}
        onClose={this.handleClose}
      >
        {children}
      </Snackbar>
    )
  }
}

export default SnackbarWrapper
