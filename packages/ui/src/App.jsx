import React from 'react'
import { connect } from 'react-redux'
import { Switch, Redirect, Route } from 'react-router'
import { ConnectedRouter } from 'connected-react-router'
import { history } from 'store'
import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import { lightTheme, darkTheme } from 'config/theme'
import routes from 'config/routes'
import normalizeURL from '@cahil/utils/dist/es/transforms/normalizeURL'
import AppFrame from 'components/Layout/AppFrame'

const getRoute = (parentPath = '/') => ({
  children,
  exact,
  redirect,
  path: childPath,
  screen
}) => {
  // Safely join the parent and child paths
  const path = normalizeURL(parentPath, childPath)

  if (redirect) {
    // Redirect to a new path
    return <Redirect key={path} from={path} exact={exact} to={redirect} />
  } else if (children) {
    // The route is the parent of several children routes, render a route for each
    return children.map(getRoute(path))
  } else {
    // Just a standard route
    return <Route key={path} path={path} exact={exact} component={screen} />
  }
}

const App = ({ dark }) => (
  <MuiThemeProvider theme={dark ? darkTheme : lightTheme}>
    <CssBaseline />
    <ConnectedRouter history={history}>
      <AppFrame>
        <Switch>{routes.map(getRoute())}</Switch>
      </AppFrame>
    </ConnectedRouter>
  </MuiThemeProvider>
)

const mapStateToProps = ({ ui }) => ({ dark: ui.darkTheme })

export default connect(mapStateToProps)(App)
