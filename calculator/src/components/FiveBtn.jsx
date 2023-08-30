import React, { Component } from 'react'

export default class FiveBtn extends Component {
  render() {
    return (
        <button id="five" className='fs-4 mt-3' onClick={this.props.eventHandler}>5</button>
    )
  }
}
