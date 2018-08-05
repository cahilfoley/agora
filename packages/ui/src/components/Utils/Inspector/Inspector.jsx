import React from 'react'
import PropTypes from 'prop-types'
import { default as ReactInpector } from 'react-inspector'
import { withTheme } from '@material-ui/core/styles'

const Inspector = ({ data, expanded, theme }) => (
  <ReactInpector
    data={data}
    theme={theme.palette.type === 'light' ? 'chromeLight' : 'chromeLight'}
    expandLevel={expanded && 100}
  />
)

Inspector.propTypes = {
  /** The object or node to inspect */
  data: PropTypes.any.isRequired,
  /** Fully expand the tree */
  expanded: PropTypes.bool,
  /** @ignore */
  theme: PropTypes.object.isRequired
}

export default withTheme()(Inspector)
