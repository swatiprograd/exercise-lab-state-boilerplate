import React, { Component } from 'react'
import Image from './components/Image';
import Data from "./components/Data";


// you can even create a component with a class.

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      date:new Date()
    }
  }

  render() {
    return (
      <div>
    <header>
      <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt=""></img>
      <h3>{this.state.date.toLocaleTimeString()}</h3>
      <h3>Kalvium Education</h3>
    </header>
    <div>
      <p>It is a long established fact that a reader will be distracted by the readable content of a 
        page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
        normal distribution of letters, as opposed to using 'Content here, content here', making it look 
        like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum 
        as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in 
        their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on 
        purpose (injected humour and the like).
      </p>
    </div>
    <Image Data={Data}></Image>
  </div>
    )
  }
}