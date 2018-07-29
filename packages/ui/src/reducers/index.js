import { combineReducers } from 'redux'
import { persistReducer } from 'utils/redux'

import notifications from './notifications'
import ui from './ui'

const rootReducer = combineReducers({
  notifications,
  ui
})

const persistConfig = {
  key: 'root',
  blacklist: ['notifications', 'ui', 'router']
}

export default persistReducer(rootReducer, persistConfig)
