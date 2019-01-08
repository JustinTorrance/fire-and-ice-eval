import { houses } from './housesReducer'

describe('housesReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = houses(undefined, {})

    expect(result).toEqual(expected)
  })
})