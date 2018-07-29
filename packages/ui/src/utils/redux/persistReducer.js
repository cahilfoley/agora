import { persistReducer as reduxPersistReducer } from 'redux-persist'
import localforage from 'utils/cache/localforage'

const persistReducer = (reducer, { key, storage = localforage, ...other }) => {
  return reduxPersistReducer(
    {
      key,
      storage,
      ...other
    },
    reducer
  )
}

export default persistReducer
