import React, { Component } from 'react'
import './NavBar.css'
import { Grid } from '@mui/material'
import LogoIg from '../LoginPage/img.ig.jpg'
import Avatar from '@mui/material/Avatar'

export default class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state= {}
}

  render() {
    return (
      <div>
        <div className='NavBar-Content'>
          <Grid container style={{
            alignItems: 'center'
            }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={3}>
              <img className='LogoInstagram' src={LogoIg} alt='LogoIg' width='110px'/>
            </Grid>
            <Grid item xs={4}>
              <input style={{
              padding: '4px',
              }} className='Input-search' type='search' placeholder='Search'/>
            </Grid>
            <Grid item xs={2} style={{
              display: 'flex',
              }}>
              <box-icon style={{
                marginRight: '14px'
                }} name='home-alt'></box-icon>
              <box-icon style={{
                marginRight: '14px'
                }} name='search'></box-icon>
              <i style={{
                fontSize: '25px',
                marginRight: '14px'
                }} class="ri-messenger-line"></i>              
              <box-icon style={{
                marginRight: '14px'
                }} name='heart'></box-icon>
              <Avatar style={{
                width: '22px',
                height: '22px',
                marginRight: '14px'
                }}/>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </div>
      </div>
    )
  }
}
