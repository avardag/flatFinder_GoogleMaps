
import React, { Component } from 'react'
import Flat from './flat/Flat';

import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flats: []
    }
  }
  
  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(res => res.json())
      .then(data=> {
      this.setState({flats: data})
      })
  }
  //RENDER METHOD
  render() {
    
    return (
      <div className="App">
        <div className="main">
          <div className="search">
          
          </div>
          <div className="flats">
            {this.state.flats.map(flat=>{
              return <Flat flat={flat}/>
            })}
          </div>
        </div>
        <div className="map">
        
        </div>
      </div>
    )
  }
}

export default App;