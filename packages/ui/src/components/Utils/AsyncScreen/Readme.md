### Purpose

This component provides a wrapper around other large components that will asynchronously load them on demand. This allows the compiler to split the bundled JavaScript into multiple files and only load them from the server when required.

This is useful for screens that depend on large external libraries (Handsontable, plotly etc...) that aren't otherwise needed and would slow down the initial load of the main page.

### Example usage

Say you have the following structure

```bash
└── src
    ├── components
    │   └── Utils
    │       └── AsyncScreen.jsx
    ├── screens
    │   └── ChartCity.jsx
    └── index.js
```

If the `ChartCity` screen looked like this

`src/screens/ChartCity.jsx`

```jsx static
import React from 'react'
import superMassiveLibrary from 'super-massive-library'

export default class ChartCity extends React.Component {
  render() {
    // Returns some unbelievable 4 dimensional chart of browser-crashing doom
    return superMassiveLibrary.renderTheSun()
  }
}
```

You could use it asynchronously in the main file like this

`src/index.js`

```jsx static
import React from 'react'
import ReactDOM from 'react-dom'
import asyncScreen from 'components/Utils/asyncScreen'

const AsyncChartCity = asyncScreen(() => import('screens/ChartCity'))

// Use like a normal component
const App = () => (
  <div>
    <h1>Welcome to my app</h1>
    <AsyncChartCity />
  </div>
)

// Will show a loading spinner until the component has loaded
ReactDOM.render(<App />, document.getElementById('root'))
```

In this case the page + title will load and a loading spinner will be rendered until the library has loaded.
