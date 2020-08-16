import React from 'react';
import './login.css';

function login() {
    return (
        <div className="Login">
            <header className="App-header"></header>
            <h2>Login Form</h2>

            <div className = "imgcontainer" >
            < img src = "img_avatar2.png" alt = "Avatar" className = "avatar" />
            </div>

        <div className="container">
            <label htmlFor="uname"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>

                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required/>

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember"/> <p>Remember me</p>
                    </label>
        </div>

        <div className="container cancel" >
            <button type="button" className="cancelbtn">Cancel</button>
            <span className="psw">Forgot <a href="#">password?</a></span>
        </div>

        </div>
);
}

export default login;
