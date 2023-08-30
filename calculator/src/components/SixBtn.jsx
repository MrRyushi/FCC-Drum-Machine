import React, { Component } from 'react'

export default class SixBtn extends Component {
  render() {
    return (
        <button id="six" className='fs-4 mt-3' onClick={this.props.eventHandler}>6</button>
    )
  }
}
