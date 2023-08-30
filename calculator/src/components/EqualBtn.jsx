import React, { Component } from 'react'

export default class equalBtn extends Component {
  render() {
    return (
      <button className='fs-4 mt-3 bg-primary'
              id="equals" onClick={this.props.eventHandler}>=</button>
    )
  }
}
