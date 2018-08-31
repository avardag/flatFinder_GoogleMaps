import React, { Component } from 'react'
import "./Marker.css"

export default class Marker extends Component {
  render() {
    let classes= "Marker"
    if(this.props.selected){
      classes += " selected"
    }
    return (
      <div className={classes}>
        ${this.props.price}
      </div>
    )
  }
}
