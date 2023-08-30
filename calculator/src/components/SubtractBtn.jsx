import React, { Component } from 'react'

export default class SubtractBtn extends Component {
  render() {
    return (
        <button id="subtract" className='fs-4 mt-3' onClick={this.props.eventHandler}>-</button>
    )
  }
}
