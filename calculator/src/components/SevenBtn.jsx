import React, { Component } from 'react'

export default class SevenBtn extends Component {
  render() {
    return (
        <button id="seven" className='fs-4 mt-3' onClick={this.props.eventHandler}>7</button>
    )
  }
}
