import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux'
import { fetchHouses }  from '../../actions'
import { fetchHousesThunk } from '../../thunks/fetchHousesThunk.js'

export class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  async componentDidMount() {
    await this.props.fetchHousesThunk('http://localhost:3001/api/v1/houses')
  }

  render() {

    const { houses } = this.props

    const houseData = houses.map((house) => 
        <div>
          <h1> { house.name } </h1>
          <p> Founded: { house.founded } </p>
          <p> Seats: { house.seats } </p>
          <p> Titles: { house.titles} </p>
          <p> Coat of Arms: { house.coatOfArms } </p>
          <p> Ancestral Weapons: { house.ancestralWeapons } </p>
          <p> Words: { house.words } </p>


        </div>

    
    )

    console.log('data', houseData)

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
          { houseData }
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses
})

export const mapDispatchToProps = (dispatch) => ({
  fetchHousesThunk: (url) => dispatch(fetchHousesThunk(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
