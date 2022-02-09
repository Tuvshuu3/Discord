import React, { useState } from "react";
import loginBck from '../assets/login.png'
import '../styles/index.scss'
import QR from '../assets/QR.png'

const Login = () => {
    return(
        <div className='Literally_Everything-loginBG'>
            <img style={{width: '100vw', height: '100vh'}} src={loginBck}/>
            <div className='greysh'>
                <div className="greysh-inner">
                    <div className="greysh-inner-2">
                        <div className='greysh-inner-2-leftside'>
                            <div className="greysh-inner-2-leftside-introduction">
                                <div className="greysh-inner-2-leftside-introduction-title">Welcome back!</div>
                                <div className="greysh-inner-2-leftside-introduction-subtitle">We're so excited to see you again!</div>
                            </div>

                            <div className="greysh-inner-2-leftside-input">
                                <div className="greysh-inner-2-leftside-input-name">EMAIL OR PHONE NUMBER</div>
                                <input type={"text"} className="greysh-inner-2-leftside-input-input2"/>
                            </div>

                            <div className="greysh-inner-2-leftside-input">
                                <div className="greysh-inner-2-leftside-input-name">PASSWORD</div>
                                <input type={"password"} className="greysh-inner-2-leftside-input-input2"/>
                            </div>

                            <div className="greysh-inner-2-leftside-forgot">Forgot your password?</div>

                            <button className="greysh-inner-2-leftside-button">Login</button>

                            <div className="greysh-inner-2-leftside-register">
                                <div className="greysh-inner-2-leftside-register-need">Need an account?</div>
                                <div className="greysh-inner-2-leftside-register-register2">Register</div>
                            </div>
                        </div>

                        <div className='greysh-inner-2-rightside'>
                            <img src={QR}/>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Login;