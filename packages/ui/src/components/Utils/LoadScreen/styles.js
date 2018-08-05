export default theme => ({
  wrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  /** Have to wrap the CircularProgress in a fixed size element otherwise
   * the div will bounce around a bit while it rotates */
  spinnerWrapper: {
    height: 50,
    width: 50
  },
  message: {
    marginTop: theme.spacing.unit * 2
  }
})
