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
  nestedLink: {
    paddingLeft: theme.spacing.unit * 6
  }
})
