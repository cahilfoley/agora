/**
 * Determines if a screen is "small" by checking the provided breakpoint.
 * In material-ui you can use the `withWidth` utility to retrieve the current
 * breakpoint of a component
 *
 * @param {'xs'|'sm'|'md'|'lg'|'xl'} breakpoint The breakpoint
 * @returns {boolean}
 * @example
```jsx
import React from 'react'
import withWidth from '@material-ui/core/withWidth'
import isSmallScreen from 'utils/materialUI/isSmallScreen'

const Demo = props => <div>isScreenSmall: {isSmallScreen(props.width)}</div>

export default withWidth()(Demo)
```
 */
export default breakpoint => !['lg', 'xl'].includes(breakpoint)
