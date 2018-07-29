import makeActionCreator from 'utils/redux/makeActionCreator'

describe('makeActionCreator', () => {
  const TEST_TYPE = 'TEST_TYPE'
  const testActionCreator = makeActionCreator(TEST_TYPE, 'foo', 'bar')
  const testAction = testActionCreator('test', 10)

  test('type correctly set', () => {
    expect(testAction.type).toBe(TEST_TYPE)
  })

  test('values assigned to correct arguments', () => {
    expect(testAction.foo).toBe('test')
    expect(testAction.bar).toBe(10)
  })
})
