import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { persistStore } from 'redux-persist'
import { connectRouter, routerMiddleware } from 'connected-react-router'

import rootReducer from 'reducers'
import customMiddleware from './middleware'

const history = createHistory()
const router = routerMiddleware(history)
const enhancer = applyMiddleware(thunk, router, ...customMiddleware)

export default () => {
  const store = createStore(connectRouter(history)(rootReducer), enhancer)
  const persistor = persistStore(store)

  return {
    history,
    persistor,
    store
  }
}
