import React, { Component } from 'react'
import UpdatedComponent from './WithCounter'

export class ClickCounter extends Component {
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    incrementCount=()=>{
    this.setState({
         count:this.state.count+1})
    }

  render() {
    const {count,incrementCount}=this.props
    return (
      <div>
        <button onClick={incrementCount}>Click {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter)