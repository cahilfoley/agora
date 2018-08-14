import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import withWidth from '@material-ui/core/withWidth'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

import styles from './styles'
import isSmallScreen from 'utils/materialUI/isSmallScreen'

class AppHeader extends React.Component {
  static defaultProps = {
    title: `Cahil's Dev Space`
  }

  static propTypes = {
    /** @ignore */
    classes: PropTypes.object.isRequired,
    /** Dark theme flag, used for the tooltip text of the toggle theme button */
    dark: PropTypes.bool.isRequired,
    /** The current page title */
    title: PropTypes.string,
    /** Callback function to toggle the AppDrawer on a mobile device */
    toggleDrawer: PropTypes.func.isRequired,
    /** Callback function to toggle the page theme */
    toggleTheme: PropTypes.func.isRequired,
    /** @ignore */
    width: PropTypes.string.isRequired
  }

  render() {
    const {
      classes,
      dark,
      title,
      toggleDrawer,
      toggleTheme,
      width
    } = this.props

    /**
     * If on a small screen the title can get too long and wrap onto a new
     * line which makes the header look really cramped. This code checks if
     * the screen width is < lg and only grabs the end
     */
    const titleParts = title.split(' - ')
    const pageTitle = isSmallScreen(width)
      ? titleParts[titleParts.length - 1]
      : title

    return (
      <AppBar className={classes.root}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            onClick={toggleDrawer}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            {pageTitle}
          </Typography>
          <Tooltip
            id="tooltip-theme"
            title={`Toggle ${dark ? 'light' : 'dark'} theme`}
          >
            <IconButton onClick={toggleTheme} color="inherit">
              <Icon>invert_colors</Icon>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    )
  }
}

export default withStyles(styles)(withWidth()(AppHeader))
