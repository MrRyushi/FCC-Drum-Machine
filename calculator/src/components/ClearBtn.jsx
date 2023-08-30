import React, { Component } from 'react'

export default class ClearBtn extends Component {
  render() {
    return (
      <button id='clear' className='fs-4 mt-3 w-100 bg-danger' onClick={this.props.eventHandler}>AC</button>
    )
  }
}
