import React from 'react'
import PropTypes from 'prop-types'
import SnackbarWrapper from './SnackbarWrapper'
import BaseToast from './BaseToast'

const Snackbar = ({ toast, onClose, ...others }) => (
  <SnackbarWrapper {...others} onClose={onClose}>
    {toast && <BaseToast {...toast} onClose={onClose} />}
  </SnackbarWrapper>
)

Snackbar.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  toast: PropTypes.object
}

export default Snackbar
