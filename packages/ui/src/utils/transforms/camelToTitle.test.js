import batchTest from 'utils/tests/batchTest'
import camelToTitle from 'utils/transforms/camelToTitle'

describe('camelToTitle', () => {
  const cases = [
    ['goGoGadget', 'Go Go Gadget'],
    ['passportReactCore', 'Passport React Core'],
    ['hello', 'Hello']
  ]

  batchTest(cases, camelToTitle)
})
