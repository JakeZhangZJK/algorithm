import fun from '../../code/array/twosum'
test('twosum1', () => {
    expect(fun.twosum1([2,7,11,15], 9)).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
})