import React, { Component } from 'react'

export default class EightBtn extends Component {
  render() {
    return (
        <button id="eight" className='fs-4 mt-3' onClick={this.props.eventHandler}>8</button>
    )
  }
}
