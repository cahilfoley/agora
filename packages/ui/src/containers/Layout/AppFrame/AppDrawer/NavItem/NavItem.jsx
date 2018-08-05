import React from 'react'
import PropTypes from 'prop-types'

import withStyles from '@material-ui/core/styles/withStyles'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Icon from '@material-ui/core/Icon'

import styles from './styles'

const NavItem = props => {
  const { classes, label, icon: RouteIcon, active, inset, onClick } = props

  return (
    <ListItem
      button
      className={`${active ? classes.activeListItem : ''} ${
        inset ? classes.nestedLink : ''
      }`}
      onClick={onClick}
    >
      <ListItemIcon>
        {typeof RouteIcon === 'string' ? (
          <Icon className={active ? classes.activeListItemText : undefined}>
            {RouteIcon}
          </Icon>
        ) : (
          <RouteIcon />
        )}
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

NavItem.defaultProps = {
  active: false,
  inset: false
}

NavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  active: PropTypes.bool,
  inset: PropTypes.bool
}

export default withStyles(styles)(NavItem)
