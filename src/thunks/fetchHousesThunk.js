import { fetchHouses } from '../actions'

export const fetchHousesThunk = (url) => {
  return async (dispatch) => {
    try {
      const response = await fetch(url)
      const houses = await response.json()
      dispatch(fetchHouses(houses))
    } catch (error){
      console.log('ERROR:', error.message)
    }
  }
}