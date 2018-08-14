import { drawerWidth } from 'config/styles'

export default theme => ({
  activeListItem: {
    backgroundColor: theme.palette.primary.main,
    cursor: 'default',
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    }
  },
  activeListItemText: {
    color: theme.palette.primary.contrastText,
    fontWeight: 500
  },
  activeListHeader: {
    cursor: 'default'
  },
  openListHeader: {
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.selected
    }
  },
  listHeaderExpandIcon: {
    color: theme.palette.text.secondary
  },
  brandLogo: {
    margin: `${theme.spacing.unit * 4}px ${drawerWidth / 4}px 0`,
    width: drawerWidth / 2,
    height: drawerWidth / 2
  },
  brandName: {
    fontWeight: 600
  },
  brandTagline: {
    letterSpacing: 4,
    marginTop: theme.spacing.unit
  },
  drawerPaper: {
    borderRight: 0,
    boxShadow: theme.shadows[4],
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  navLinks: {
    marginTop: theme.spacing.unit
  },
  nestedLink: {
    paddingLeft: theme.spacing.unit * 6
  }
})
