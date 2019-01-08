import { mapStateToProps, mapDispatchToProps } from './App'

describe('App', () => {
  describe('mapStateToProps', () => {
    it('should return an object with the houses array', () => {
      const mockState = {
        houses: [{name: 'house'}]
      }
      const expected = {
        houses: [{name: 'house'}]
      }

      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
      
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with fetchHousesThunk when called in componentDidMount', () => {
      const mockDispatch = jest.fn()
      const mockUrl = 'asdf'
      const thunktoDispatch = fetchHousesThunk(mockUrl)

      const mappedProps = mapDispatchToProps(mockDispatch)
      mappedProps.componentDidMount(mockUrl)

      expect(mockDispatch).toHaveBeenCalledWith(thunkToDispatch)

    })
  })
})