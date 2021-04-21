const fizzbuzz = require('./fizzbuzz')
const fizzbuzz_game = require('./fizzbuzz_game')

describe('Fizz Buzz', function () {

  it('gives answer 1 for 1', () => {
    expect(fizzbuzz(1)).toEqual('1')
  })

  it('gives answer 2 for 2', () => {
    expect(fizzbuzz(2)).toEqual('2')
  })

  it('gives answer Fizz for 3', () => {
    expect(fizzbuzz(3)).toEqual('Fizz')
  })

  it('gives answer Buzz for 5', () => {
    expect(fizzbuzz(5)).toEqual('Buzz')
  })


  it.each([
    [1, '1'],
    [2, '2'],
    [3, 'Fizz'],
    [6, 'Fizz'],
    [5, 'Buzz'],
    [15, 'FizzBuzz'],
    [45, 'FizzBuzz']])
  ('for value %i gives answer %s', (value, expected) => {
    expect(fizzbuzz(value)).toBe(expected)
  });


  describe('works for all the numbers', function () {
    [
      [1, '1'],
      [2, '1,2'],
      [3, '1,2,Fizz']
    ].forEach(function (params) {
      var input = params[0], expected = params[1]

      it('' + input, function () {
        expect(fizzbuzz_game(input)).toEqual(expected)
      })

    })
  })
})
