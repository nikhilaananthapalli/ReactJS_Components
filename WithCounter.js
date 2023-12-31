import React from 'react';


const UpdatedComponent = OriginalComponent =>{
    class NewComponent extends React.Component{
        constructor(){
            super()
            this.state={
                count:0
            }
        }
       incrementCount=()=>{
        this.setState(prevState =>{
            return {count:prevState.count+1}})
        }

        render(){
            return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}/>
        }
    }
    return NewComponent
}
 export default UpdatedComponent