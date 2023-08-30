import './App.css'
import EqualBtn from './components/EqualBtn'
import AddBtn from './components/AddBtn'
import SubtractBtn from './components/SubtractBtn'
import MultiplyBtn from './components/MultiplyBtn'
import DivideBtn from './components/DivideBtn'
import ZeroBtn from './components/ZeroBtn'
import OneBtn from './components/OneBtn'
import TwoBtn from './components/TwoBtn'
import ThreeBtn from './components/ThreeBtn'
import FourBtn from './components/FourBtn'
import FiveBtn from './components/FiveBtn'
import SixBtn from './components/SixBtn'
import SevenBtn from './components/SevenBtn'
import EightBtn from './components/EightBtn'
import NineBtn from './components/NineBtn'
import DecimalBtn from './components/DecimalBtn'
import Display from './components/Display'
import ClearBtn from './components/ClearBtn'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fullEquation: "",
       currentNum: "",
       elementClicked: "",
       finalAnswer: null
    }

    this.handleZeroButtonClick = this.handleZeroButtonClick.bind(this);
    this.handleOneButtonClick = this.handleOneButtonClick.bind(this);
    this.handleTwoButtonClick = this.handleTwoButtonClick.bind(this);
    this.handleThreeButtonClick = this.handleThreeButtonClick.bind(this);
    this.handleFourButtonClick = this.handleFourButtonClick.bind(this);
    this.handleFiveButtonClick = this.handleFiveButtonClick.bind(this);
    this.handleSixButtonClick = this.handleSixButtonClick.bind(this);
    this.handleSevenButtonClick = this.handleSevenButtonClick.bind(this);
    this.handleEightButtonClick = this.handleEightButtonClick.bind(this);
    this.handleNineButtonClick = this.handleNineButtonClick.bind(this);

    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleSubtractButtonClick = this.handleSubtractButtonClick.bind(this);
    this.handleMultiplyButtonClick = this.handleMultiplyButtonClick.bind(this);
    this.handleDivideButtonClick = this.handleDivideButtonClick.bind(this);
    this.handleDecimalButtonClick = this.handleDecimalButtonClick.bind(this);
    this.handleClearButtonClick = this.handleClearButtonClick.bind(this);
    this.handleEqualButtonClick = this.handleEqualButtonClick.bind(this);
  }

  handleZeroButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '0',
      elementClicked: '0',
      fullEquation: state.fullEquation + '0'
    }))
  }

  handleOneButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '1',
      elementClicked: '1',
      fullEquation: state.fullEquation + '1'
    }))
  }

  handleTwoButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '2',
      elementClicked: '2',
      fullEquation: state.fullEquation + '2'
    }))
  }

  handleThreeButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '3',
      elementClicked: '3',
      fullEquation: state.fullEquation + '3'
    }))
  }

  handleFourButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '4',
      elementClicked: '4',
      fullEquation: state.fullEquation + '4'
    }))
  }

  handleFiveButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '5',
      elementClicked: '5',
      fullEquation: state.fullEquation + '5'
    }))
  }

  handleSixButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '6',
      elementClicked: '6',
      fullEquation: state.fullEquation + '6'
    }))
  }

  handleSevenButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '7',
      elementClicked: '7',
      fullEquation: state.fullEquation + '7'
    }))
  }

  handleEightButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '8',
      elementClicked: '8',
      fullEquation: state.fullEquation + '8'
    }))
  }

  handleNineButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + '9',
      elementClicked: '9',
      fullEquation: state.fullEquation + '9'
    }))
  }

  handleAddButtonClick(){
    // this above condition checks to avoid double operators 
    if(this.state.elementClicked == '+' ||
       this.state.elementClicked == '-' || 
       this.state.elementClicked == '*' ||
       this.state.elementClicked == '/'){
        this.setState((state, props) => ({
          fullEquation: state.fullEquation.substring(0, state.fullEquation.length-2)
        }))
       }

    this.setState((state, props) => ({
      currentNum: "",
      elementClicked: '+',
      fullEquation: state.fullEquation + ' + '
    }))
  }

  handleSubtractButtonClick(){
    // this above condition checks to avoid double operators 
    if(this.state.elementClicked == '+' ||
       this.state.elementClicked == '-' || 
       this.state.elementClicked == '*' ||
       this.state.elementClicked == '/'){
        this.setState((state, props) => ({
          fullEquation: state.fullEquation.substring(0, state.fullEquation.length-2)
        }))
       }

    this.setState((state, props) => ({
      currentNum: "",
      elementClicked: '-',
      fullEquation: state.fullEquation + ' - '
    }))
  }

  handleMultiplyButtonClick(){
    // this above condition checks to avoid double operators 
    if(this.state.elementClicked == '+' ||
       this.state.elementClicked == '-' || 
       this.state.elementClicked == '*' ||
       this.state.elementClicked == '/'){
        this.setState((state, props) => ({
          fullEquation: state.fullEquation.substring(0, state.fullEquation.length-2)
        }))
       }

    this.setState((state, props) => ({
      currentNum: "",
      elementClicked: '*',
      fullEquation: state.fullEquation + ' * '
    }))
  }

  handleDivideButtonClick(){
    // this above condition checks to avoid double operators 
    if(this.state.elementClicked == '+' ||
       this.state.elementClicked == '-' || 
       this.state.elementClicked == '*' ||
       this.state.elementClicked == '/'){
        this.setState((state, props) => ({
          fullEquation: state.fullEquation.substring(0, state.fullEquation.length-2)
        }))
       }

    this.setState((state, props) => ({
      currentNum: "",
      elementClicked: '/',
      fullEquation: state.fullEquation + ' / '
    }))
  }

  handleDecimalButtonClick(){
    this.setState((state, props) => ({
      currentNum: state.currentNum + ".",
      elementClicked: '0.' ,
      fullEquation: state.fullEquation + '.'
    }))
  }

  handleClearButtonClick(){
    this.setState({
      elementClicked: "",
      currentNum: "",
      fullEquation: "",
      finalAnswer: null
    })
  }

  handleEqualButtonClick(){
    this.setState({
      finalAnswer: eval(this.state.fullEquation)
    })
  }
  

  render() {
    return (
      <div className='border border-white p-3'>
        <div className='row'>
          <Display currentNum={this.state.currentNum} 
                   elementClicked={this.state.elementClicked}
                   fullEquation={this.state.fullEquation}
                   finalAnswer={this.state.finalAnswer}/>
        </div>

        <div className='row'>
          <div className="col-6"><ClearBtn eventHandler={this.handleClearButtonClick}/></div>
          <div className="col"><DivideBtn eventHandler={this.handleDivideButtonClick}/></div>
          <div className="col"><MultiplyBtn eventHandler={this.handleMultiplyButtonClick}/></div>
        </div>

        <div className='row'>
          <div className="col"><SevenBtn eventHandler={this.handleSevenButtonClick}/></div>
          <div className="col"><EightBtn eventHandler={this.handleEightButtonClick}/></div>
          <div className="col"><NineBtn eventHandler={this.handleNineButtonClick}/></div>
          <div className="col"><SubtractBtn eventHandler={this.handleSubtractButtonClick}/></div>
        </div>

        <div className='row'>
          <div className="col"><FourBtn eventHandler={this.handleFourButtonClick}/></div>
          <div className="col"><FiveBtn eventHandler={this.handleFiveButtonClick}/></div>
          <div className="col"><SixBtn eventHandler={this.handleSixButtonClick}/></div>
          <div className="col"><AddBtn eventHandler={this.handleAddButtonClick}/></div>
        </div>

        <div className='row'>
          <div className='col-9'>
            <div className='row'>
              <div className="col"><OneBtn eventHandler={this.handleOneButtonClick}/></div>
              <div className="col"><TwoBtn eventHandler={this.handleTwoButtonClick}/></div>
              <div className="col"><ThreeBtn eventHandler={this.handleThreeButtonClick}/></div>
            </div>

            <div className='row'>
              <div className="col-8"><ZeroBtn eventHandler={this.handleZeroButtonClick}/></div>
              <div className="col-4"><DecimalBtn eventHandler={this.handleDecimalButtonClick}/></div>
            </div>
          </div>
          
          <div className='col-3'>
            <EqualBtn eventHandler={this.handleEqualButtonClick}/>
          </div>
        </div>
      </div>
    )
  }
}
