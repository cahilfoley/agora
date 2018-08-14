export default theme => ({
  root: {
    flexGrow: 1,
    flex: 1,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    marginTop: 64,
    overflowX: 'hidden',
    overflowY: 'auto',
    [theme.breakpoints.down('xs')]: {
      marginTop: 56
    }
  }
})
