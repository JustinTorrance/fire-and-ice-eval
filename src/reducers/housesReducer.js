export const houses = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_HOUSES':
      return action.houses
    default: 
      return state
  }
}