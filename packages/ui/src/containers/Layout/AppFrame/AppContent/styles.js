export default theme => ({
  root: {
    flexGrow: 1,
    flex: 1,
    position: 'relative',
    backgroundColor: theme.palette.background.default,
    marginTop: 64,
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      marginTop: 56
    }
  }
})
