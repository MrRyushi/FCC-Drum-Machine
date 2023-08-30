import React, { Component } from 'react'

export default class DivideBtn extends Component {
  render() {
    return (
        <button id='divide' className='fs-4 mt-3' onClick={this.props.eventHandler}>/</button>
    )
  }
}
