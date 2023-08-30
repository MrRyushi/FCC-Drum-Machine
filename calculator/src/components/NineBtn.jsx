import React, { Component } from 'react'

export default class NineBtn extends Component {
  render() {
    return (
        <button id="nine" className='fs-4 mt-3' onClick={this.props.eventHandler}>9</button>
    )
  }
}
