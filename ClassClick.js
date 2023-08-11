import React, { Component } from 'react'

export class ClassClick extends Component {
    constructor(){
        super()
        this.state={
            message:'Hello Mondayy!'
        }
    }
    handleClick(){
        this.setState({message:'Thank you'
    })
        console.log(this.state.message);
        
    }  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.handleClick.bind(this)}>Click this button</button>
      </div>
    )
  }
}

export default ClassClick