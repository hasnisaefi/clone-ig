import React, { Component } from 'react'
import '../LoginPage/LoginPage.css'
import { Grid } from '@mui/material'
import ImgLogin from '../LoginPage/ImgLogin.jpg'
import ImgIg from '../LoginPage/img.ig.jpg'
import Facebook from '../LoginPage/facebook.jpg'
import PlayStore from '../LoginPage/googlePlay.png'
import AppStore from '../LoginPage/apps.png'

export default class LoginPage extends Component {
  constructor(props){
  super(props)
  this.state= {}
}
  render() {
    return (
      <div className='content'>
        <Grid container>
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
            <div className='loginPage'>
              <div>
                <div>
                  <img className='imgHp' src={ImgLogin} alt="img.ig" width="280px" height="464"/>
                </div>
              </div>

              <div>
                <div className='loginRight'>
                  <img className='logoIg' src={ImgIg} alt="img.ig"/>
                  <div className='Login'>
                    <input className='text' type='text' placeholder='Phone number, Username or email'/>
                    <input className='text' type='password' placeholder='Password'/>
                    <button className='SigIn'>Sign in</button>
                    <p className='OR'><hr/> OR <hr/></p>
                  </div>
                  <div className='imgFacebook' >
                    <img className='fcb' src={Facebook} alt='logo facebook' width='20px' height='20px'/>
                    <p className='facebook'>Log in with Facebook</p>
                  </div>
                    <p className='pass'>forgot password?</p>
                </div>
                <div className='form-1'>
                  <p className='one'>Don't have an account?</p>
                  <p className='two'>Sign up</p>
                </div>
                <div className='getapp'>
                  <p>Get the app.</p>
                </div>
                <div className='play'>
                  <img className='store' src={PlayStore} alt='play store' width='118px'/>
                  <img className='app' src={AppStore} alt='app store' width='118px'/>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={3}>
            
          </Grid>
        </Grid>
      </div> 
    )
  }
}
