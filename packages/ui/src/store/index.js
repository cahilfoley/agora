import configureStore from './configureStore'

const { history, persistor, store } = configureStore()

export { history, persistor, store }

export default store
