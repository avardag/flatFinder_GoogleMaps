import React, { Component } from 'react'
import "./Flat.css"


export default class Flat extends Component {
  handleFlatClick = ()=>{
    this.props.selectFlat(this.props.flat)
  }
  render() {
    const {priceCurrency, price, name, imageUrl} = this.props.flat
    const title = `${priceCurrency} ${price} - ${name}`

    const imgStyle = {
      backgroundImage: `url('${imageUrl}')`
    }
    return (
      <div className="Flat" onClick={this.handleFlatClick}>
        <div className="flat-picture" style={imgStyle}>

        </div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    )
  }
}
