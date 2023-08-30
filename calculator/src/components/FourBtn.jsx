import React, { Component } from 'react'

export default class FourBtn extends Component {
  render() {
    return (
        <button id="four" className='fs-4 mt-3' onClick={this.props.eventHandler}>4</button>
    )
  }
}
