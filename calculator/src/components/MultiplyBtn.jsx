import React, { Component } from 'react'

export default class MultiplyBtn extends Component {
  render() {
    return (
        <button className='fs-4 mt-3' onClick={this.props.eventHandler}>*</button>
    )
  }
}
