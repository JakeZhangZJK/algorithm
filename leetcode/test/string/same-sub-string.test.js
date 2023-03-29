import subStr from '../../code/string/same-sub-string'

test('subStr(00110011)', () => {
  expect(subStr('00110011')).toEqual(6)
})

test('subStr(10101)', () => {
  expect(subStr('10101')).toEqual(4)
})
