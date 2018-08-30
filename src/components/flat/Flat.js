import React, { Component } from 'react'
import "./Flat.css"


export default class Flat extends Component {
  
  render() {
    const {currency, price, name, imageUrl} = this.props.flat
    const title = `${currency} ${price} - ${name}`

    const imgStyle = {
      backgroundImage: `url('${imageUrl}')`
    }
    return (
      <div className="flat">
        <div className="flat-picture" style={imgStyle}>

        </div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    )
  }
}
