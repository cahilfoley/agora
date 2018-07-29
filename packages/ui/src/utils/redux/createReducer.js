/**
 * Create a Redux reducer
 *
 * @param  {Object} handlers A map of action types and handlers
 * @param  {any} [initialState={}] Initial reducer state
 * @return {function(state: any, action: Object)} Redux reducer
 */
const createReducer = (handlers, initialState = {}) => (
  state = initialState,
  action
) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action)
  } else {
    return state
  }
}

export default createReducer
