const sum = require('./function')

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
})

// 2が偶数化を判定するtest
test('judgle 2 is even? to be true', () => {
    expect(even(2)).toBeTruthy()
})
