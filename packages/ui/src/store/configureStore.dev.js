import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import {
  connectRouter,
  routerActions,
  routerMiddleware
} from 'connected-react-router'
import { persistStore } from 'redux-persist'
import { createLogger } from 'redux-logger'
import rootReducer from 'reducers'
import customMiddleware from './middleware'

import storeActions from 'actions'

const history = createHistory()

// Redux configuration
const middleware = []
const enhancers = []

// Middleware
middleware.push(thunk)

// Logging middleware
const logger = createLogger({
  level: 'info',
  collapsed: true
})

// Skip redux logs in console during the tests
if (process.env.NODE_ENV !== 'test') {
  middleware.push(logger)
}

// Router Middleware
const router = routerMiddleware(history)
middleware.push(router)

// Redux DevTools Configuration
// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      actionCreators: {
        ...storeActions,
        ...routerActions
      }
    })
  : compose

// Apply middleware and compose enhancers
enhancers.push(applyMiddleware(...middleware, ...customMiddleware))
const enhancer = composeEnhancers(...enhancers)

// Store initialization
export default () => {
  const store = createStore(connectRouter(history)(rootReducer), enhancer)
  const persistor = persistStore(store)

  return { history, persistor, store }
}
