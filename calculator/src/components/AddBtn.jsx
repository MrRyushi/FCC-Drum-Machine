import React, { Component } from 'react'

export default class AddBtn extends Component {
  render() {
    return (
        <button id='add' className='fs-4 mt-3' onClick={this.props.eventHandler}>+</button>
    )
  }
}
