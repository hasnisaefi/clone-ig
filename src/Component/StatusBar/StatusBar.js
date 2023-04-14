import React, { Component } from 'react'
import './StatusBar.css'
import { Avatar } from '@mui/material'

export default class StatusBar extends Component {
  constructor(props) {
    super(props)
    this.state= {}
  }

  render() {
    return (
      <div>
        <div className='statusBar-Container' style={{
          display: 'flex',
        }}>
          <div className='status' style={{}}>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
          <div className='status'>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
          <div className='status'>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
          <div className='status'>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
          <div className='status'>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
          <div className='status'>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
          <div className='status'>
            <Avatar className='avatar' style={{
              width: '30px',
              height: '30px',
              marginRight: '10px',
            }}/>
            <div className='avatar-text'>
              aa
            </div>
          </div>
        </div>
      </div>
    )
  }
}
