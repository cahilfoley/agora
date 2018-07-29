<img src='/assets/styleguide/AppFrame_Sample.png' style='margin-bottom: 8px; width: 100%;' />

### Example with basic content

```jsx static
import React from 'react'
import ReactDOM from 'react-dom'
import Typography from '@material-ui/core/Typography'
import AppFrame from 'components/Layout/AppFrame'

const Content = () => (
  <div>
    <Typography variant="display3">Hello, World!</Typography>
    <Typography variant="headline">This is so easy to use</Typography>
  </div>
)

ReactDOM.render(
  <AppFrame>
    <Content />
  </AppFrame>,
  document.getElementById('root')
)
```

### Example with react-redux-router

```jsx static
import React from 'react'
import ReactDOM from 'react-dom'
import { Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import AppFrame from 'components/Layout/AppFrame'
import { history } from 'store'

const App = () => (
  <ConnectedRouter history={history}>
    <AppFrame>
      <Switch>{/*
        Render application routes here
      */}</Switch>
    </AppFrame>
  </ConnectedRouter>
)

ReactDOM.render(<App />, document.getElementById('root'))
```
