import React, { Component } from 'react'

export default class ZeroBtn extends Component {
  render() {
    return (
        <button id="zero" className='fs-4 mt-3 w-100' onClick={this.props.eventHandler}>0</button>
    )
  }
}
