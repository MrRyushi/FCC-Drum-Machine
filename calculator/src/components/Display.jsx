import React, { Component } from 'react'

export default class Display extends Component {
  render() {
    let element = "";
    if(this.props.finalAnswer != null){
      element = this.props.finalAnswer;
    } else if(this.props.currentNum == "" && this.props.elementClicked == ""){
      element = '0';
    } else if(this.props.elementClicked == '+' || 
              this.props.elementClicked == '-' ||
              this.props.elementClicked == '*' ||
              this.props.elementClicked == '/'){
                
                element = this.props.elementClicked;
    } else {
      element = this.props.currentNum;
    }
   
    return (
      <div className='border border-white'>
        <p id="fullDisplay" className='text-warning fs-5 text-end'>{this.props.fullEquation}</p>
        <p id='display' className='text-white
                                   fs-4
                                   text-end'>{element}</p>
      </div>
    )
  }
}
