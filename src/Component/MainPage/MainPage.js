import React, { Component } from 'react'
import Post from '../Post/Post'

export default class MainPage extends Component {
    constructor(props) {
        super(props)
        this.state= {}
      }
  render() {
    return (
      <div>
        <Post/>
      </div>
    )
  }
}
