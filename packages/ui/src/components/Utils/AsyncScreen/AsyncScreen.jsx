import React from 'react'
import LoadScreen from 'components/Utils/LoadScreen'

/**
 * asyncScreen
 *
 * @export
 * @param {Promise<React.Component>} importComponent A promise that will resolve with the component to display
 * @returns {React.Component}
 */
export default function asyncScreen(importComponent) {
  class AsyncScreen extends React.Component {
    state = {
      component: null
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({ component })
    }

    render() {
      const C = this.state.component

      return C ? <C {...this.props} /> : <LoadScreen />
    }
  }

  return AsyncScreen
}
