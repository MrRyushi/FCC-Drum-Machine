import React, { Component } from 'react'

export default class TwoBtn extends Component {
  render() {
    return (
        <button id="two" className='fs-4 mt-3' onClick={this.props.eventHandler}>2</button>
    )
  }
}
