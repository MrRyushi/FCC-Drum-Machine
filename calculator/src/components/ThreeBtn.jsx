import React, { Component } from 'react'

export default class ThreeBtn extends Component {
  render() {
    return (
        <button id="three" className='fs-4 mt-3' onClick={this.props.eventHandler}>3</button>
    )
  }
}
