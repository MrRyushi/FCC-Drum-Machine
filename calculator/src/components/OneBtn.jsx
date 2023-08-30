import React, { Component } from 'react'

export default class OneBtn extends Component {
  render() {
    return (
        <button id="one" className='fs-4 mt-3' onClick={this.props.eventHandler}>1</button>
    )
  }
}
