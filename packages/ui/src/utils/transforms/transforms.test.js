import batchTest from 'utils/tests/batchTest'
import camelToTitle from 'utils/transforms/camelToTitle'
import getAcronym from 'utils/transforms/getAcronym'

describe('camelToTitle', () => {
  const cases = [
    ['goGoGadget', 'Go Go Gadget'],
    ['passportReactCore', 'Passport React Core'],
    ['hello', 'Hello']
  ]

  batchTest(cases, camelToTitle)
})

describe('getAcronym', () => {
  const cases = [
    ['Empire Strikes Back', 'ESB'],
    ['Passport', 'PAS'],
    ['Cahil Foley', 'CF'],
    ['Sneaky  Double', 'SD'],
    ['More than three words', 'MTT'],
    ['', 'NA']
  ]

  batchTest(cases, getAcronym)
})
