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
    padding: theme.spacing.unit * 2,
    width: '100%'
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
