import React from 'react'

class HelloWorld extends React.Component{
    render(){
        return(
        <h1>//Hello I am {this.props.name}</h1>
        )
    }
}


// function HelloWorld(props){
//     return(
//     <h1>Hello I am {props.name}</h1>
//     )
// }



export default HelloWorld