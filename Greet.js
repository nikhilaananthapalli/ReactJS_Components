import React from 'react'
import './greetStyle.css'

function Greet(props){
    return (
        <h1>Welcome {props.name} a.k.a {props.heroName}</h1>
        ) 
    }
export default Greet;