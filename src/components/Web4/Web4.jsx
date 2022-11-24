import React, { Component } from "react"
import "./style.css"

class Web4 extends Component{
    state = {
        name:'aaaaaaaaa',
        email:'eeeeee',
        password:'saaaa',
        check:false
    };
    
    handleInput = event => this.setState({ [event.target.name]: event.target.value });
   deleteInput1=()=>{
    this.setState({name:'' }
   )}
   deleteInput2=()=>{
    this.setState({email:'' }
   )}
   deleteInput3=()=>{
    this.setState({password:'' }
   )}
   isActive = () => {
    this.setState({ check: !this.state.check })
   }
   
    render(){
        console.log(this.state)
        

        return (
        <>
            <label htmlFor="name">Name:
              <input
               value={this.state.name}
                 id="name"
                 name="name"
                 onChange={this.handleInput}/>
                   <button onClick={() =>{this.deleteInput1}}>X</button>

            </label>
            <label htmlFor="email">Email:
              <input
               value={this.state.email}
                 id="email"
                 name="email"
                 onChange={this.handleInput}
                 />
                   <button onClick={() =>{this.deleteInput2}}>X</button>
                 
            </label>
            <label htmlFor="password">Password:
              <input type={this.state.check?'text':'password'}
               value={this.state.password}
                 id="password"
                 name="password"
                 onChange={this.handleInput}/>
                   <button onClick={() =>{this.deleteInput3}}>X</button>
                 < input
           type="checkbox"
           checked={this.state.isActive}
           onClick={this.isActive}
         />
                  
            </label>

            </>
            
           );
    }
}
export default Web4
