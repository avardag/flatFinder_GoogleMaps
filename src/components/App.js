
import React, { Component } from 'react'

import GoogleMapReact from 'google-map-react';
import Flat from './flat/Flat';
import Marker from './marker/Marker';

import "./App.css"



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      flats: [],
      allFlats: [], // a sm cheat
      selectedFlat:null
    }
    this.selectFlat = this.selectFlat.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(res => res.json())
      .then(data=> {
      this.setState({flats: data, allFlats: data})
      })
  }
  selectFlat(flat){
    this.setState({selectedFlat: flat})
  }
  handleSearch(e){
    this.setState({
      search: e.target.value,
      flats: this.state.allFlats.filter(flat=> {
        return new RegExp(e.target.value, "i").exec(flat.name)
      })
    })
  }
  //RENDER METHOD
  render() {
    let center= {lat: 48.8566, lng: 2.3522};
    if (this.state.selectedFlat) {
      center= {lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng}
    }
    return (
      <div className="App">
        <div className="main">
          <div className="search">
            <input
              type="text"
              placeholder="Search flats here..."
              value={this.state.search}
              onChange={this.handleSearch}
              />
          </div>
          <div className="flats">
            {this.state.flats.map(flat=>{
              return <Flat key={flat.id} flat={flat} selectFlat={this.selectFlat}/>
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            defaultZoom={12}
          >
          {this.state.flats.map(flat=>{
            return <Marker 
                      key={flat.id}
                      lat={flat.lat} 
                      lng={flat.lng} 
                      price={flat.price}
                      selected={flat === this.state.selectedFlat}
                      />
          })}
            
          </GoogleMapReact>
        </div>
      </div>
    )
  }
}

export default App;

