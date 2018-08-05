import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'
import styles from './styles'

/**
 * ### Purpose
 * The `LoadScreen` is a placeholder to display while asynchronous content is
 * being loaded. It is used in the asyncScreen utility function but can also be
 * used in place of any other component.
 */
const LoadScreen = ({ classes, message }) => (
  <div className={classes.wrapper}>
    <Typography variant="display3">Loading</Typography>
    <div className={classes.spinnerWrapper}>
      <CircularProgress size={50} />
    </div>
    {message && (
      <Typography className={classes.message} variant="subheading">
        {message}
      </Typography>
    )}
  </div>
)

LoadScreen.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  /** An informational message to display below the loading spinner */
  message: PropTypes.string
}

LoadScreen.defaultProps = {
  message: null
}

export default withStyles(styles)(LoadScreen)
