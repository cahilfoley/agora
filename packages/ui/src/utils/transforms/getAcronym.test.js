import batchTest from 'utils/tests/batchTest'
import getAcronym from 'utils/transforms/getAcronym'

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
