import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Hidden from '@material-ui/core/Hidden'
import Icon from '@material-ui/core/Icon'

import normalize from 'utils/transforms/normalizeUrl'
import routes from 'config/routes'
import styles from './styles'

class AppDrawer extends React.Component {
  static propTypes = {
    /** @ignore */
    classes: PropTypes.object.isRequired,
    /** Show/hide the side navigation on a mobile device */
    mobileOpen: PropTypes.bool,
    /** Callback for navigating with react-redux-router  */
    navigateTo: PropTypes.func.isRequired,
    /** @ignore */
    theme: PropTypes.object.isRequired,
    /** Callback for toggling the side navigation on a mobile device */
    toggleDrawer: PropTypes.func.isRequired
  }

  state = { open: null }

  handleClickLink = route => event => {
    event.preventDefault()
    const { navigateTo } = this.props
    const { active, path, screen } = route

    // Check if the link is an external redirect
    if (screen.isExternalLink) {
      // Get the target from the component and navigate there
      window.location.href = screen.targetUrl
    } else if (!active) {
      // Normal route, push to router history
      navigateTo(path.split('/:')[0])
    }
  }

  handleClickExpandList = path => {
    this.setState(prevState => ({
      open: prevState.open === path ? null : path
    }))
  }

  render() {
    const { classes, currentPath, mobileOpen, theme, toggleDrawer } = this.props

    const NavItem = route => {
      const { label, icon, active, inset } = route
      return (
        <ListItem
          button
          className={`${active ? classes.activeListItem : ''} ${
            inset ? classes.nestedLink : ''
          }`}
          onClick={this.handleClickLink(route)}
        >
          <ListItemIcon>
            <Icon className={active ? classes.activeListItemText : undefined}>
              {icon}
            </Icon>
          </ListItemIcon>
          <ListItemText
            inset={inset}
            classes={{
              primary: active ? classes.activeListItemText : undefined
            }}
            primary={label}
          />
        </ListItem>
      )
    }

    // Main content of the drawer
    const drawer = (
      <React.Fragment>
        {/* Team logo */}
        <img className={classes.brandLogo} src={'/bla'} alt="Agora UI Logo" />
        {/* List of navigation links */}
        <List className={classes.navLinks}>
          {/* Don't need to show links for redirect items */}
          {routes.filter(route => !route.redirect).map(route => {
            const { children, label, icon, path: parentPath } = route
            const active = currentPath.startsWith(route.path)

            // If the item has any children then it is a group heading
            if (children) {
              const open = active || this.state.open === parentPath

              // Create a collapsing panel for the group
              return (
                <React.Fragment key={parentPath}>
                  <ListItem
                    button
                    disableRipple={active}
                    className={`${open ? classes.openListHeader : ''} ${
                      active ? classes.activeListHeader : ''
                    }`}
                    onClick={() =>
                      !active && this.handleClickExpandList(parentPath)
                    }
                  >
                    <ListItemIcon>
                      <Icon>{icon}</Icon>
                    </ListItemIcon>
                    <ListItemText primary={label} />
                    {open ? (
                      <Icon className={classes.listHeaderExpandIcon}>
                        expand_less
                      </Icon>
                    ) : (
                      <Icon className={classes.listHeaderExpandIcon}>
                        expand_more
                      </Icon>
                    )}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      {children
                        // Don't show redirections as links
                        .filter(child => !child.redirect)
                        // Add a nav item for each route
                        .map(childRoute => {
                          const path = normalize(parentPath, childRoute.path)
                          return (
                            <NavItem
                              {...childRoute}
                              key={path}
                              path={path}
                              active={currentPath.startsWith(
                                path.split('/:')[0]
                              )}
                              inset
                            />
                          )
                        })}
                    </List>
                  </Collapse>
                </React.Fragment>
              )
            } else {
              return <NavItem key={route.path} {...route} active={active} />
            }
          })}
        </List>
      </React.Fragment>
    )

    return (
      <React.Fragment>
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </React.Fragment>
    )
  }
}

export default withStyles(styles, { withTheme: true })(AppDrawer)
