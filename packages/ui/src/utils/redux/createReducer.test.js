import createReducer from 'utils/redux/createReducer'

describe('createReducer', () => {
  const defaultState = { counter: 0 }

  const TEST_UP = 'TEST_UP'
  const TEST_DOWN = 'TEST_DOWN'
  const TEST_INVALID = 'TEST_INVALID'

  const testReducer = createReducer(
    {
      [TEST_UP]: (state, action) => ({ ...state, counter: state.counter + 1 }),
      [TEST_DOWN]: (state, action) => ({ ...state, counter: state.counter - 1 })
    },
    defaultState
  )

  test('inital state is set', () => {
    let state = testReducer(undefined, { type: TEST_INVALID })

    expect(state.counter).toBe(defaultState.counter)
  })

  test('counter is incremented', () => {
    let state = testReducer({ counter: 5 }, { type: TEST_UP })

    expect(state.counter).toBe(6)
  })

  test('counter is decremented', () => {
    let state = testReducer({ counter: 3 }, { type: TEST_DOWN })

    expect(state.counter).toBe(2)
  })
})
