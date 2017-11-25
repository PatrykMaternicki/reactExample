import React, { Component } from 'react';


class example1 extends Component{


  render(){
    return(
      <section style={{background:this.props.color}}>
      <p style={{color:'white'}}>{this.props.text}</p>
      <p style={{color:'white'}}>Created by {this.props.whoCreated} </p>
      <p> Sometext without brackets</p>
      </section>
    )
  }
}

export default example1;
