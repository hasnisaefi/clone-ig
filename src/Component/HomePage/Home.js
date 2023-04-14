import React, { Component, Fragment } from 'react'
import './Home.css'
import NavBar from '../NavBar/NavBar'
// import Main from '../Main/Main'

export default class Home extends Component {
    constructor(props) {
      super(props)
      this.state= {}
    }

  render() {
    return (
      <Fragment>
        <NavBar/>
        {/* <Main/> */}
      </Fragment>
    )
  }
}
