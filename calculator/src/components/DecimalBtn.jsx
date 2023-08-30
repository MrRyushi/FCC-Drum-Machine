import React, { Component } from 'react'

export default class DecimalBtn extends Component {
  render() {
    return (
      <button id='decimal' className='fs-4 mt-3' onClick={this.props.eventHandler}>.</button>
    )
  }
}
