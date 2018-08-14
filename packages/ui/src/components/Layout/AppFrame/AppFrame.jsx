import React from 'react'
import PropTypes from 'prop-types'

import AppContent from './AppContent'
import AppDrawer from './AppDrawer'
import AppHeader from './AppHeader'
import AppWrapper from './AppWrapper'

/**
 * The AppFrame component provides an easy way to provide a complete page layout including
 * the side nav and the header. Child components passed to the AppFrame are rendered as the
 * main page content, this would normally be your app routes.
 * @return {React.StatelessComponent} The AppFrame component
 */
const AppFrame = ({ children, noContentPadding }) => (
  <AppWrapper>
    <AppDrawer />
    <AppHeader />
    <AppContent noContentPadding={noContentPadding}>{children}</AppContent>
  </AppWrapper>
)

AppFrame.propTypes = {
  /** Child component to be rendered as app content */
  children: PropTypes.node.isRequired,
  /** Flag to disable padding of the app content */
  noContentPadding: PropTypes.bool
}

AppFrame.defaultProps = {
  noContentPadding: false
}

export default AppFrame
