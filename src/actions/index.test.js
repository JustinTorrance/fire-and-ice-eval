import * as actions from '../actions'

describe('actions', () => {
  it('should have a type of FETCH_HOUSES', () => {
    const houses = { name: 'house' }
    const expectedAction = {
      type: 'FETCH_HOUSES',
      houses: { name: 'house' }
    }

    const result = actions.fetchHouses(houses)

    expect(result).toEqual(expectedAction)
  })
})