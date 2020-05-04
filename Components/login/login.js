import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'
import { API } from '../../ConfigAPI/ConfigAPI'
const md5 = require('md5')

function Login() {
    document.title = "login"
    if (localStorage.getItem('username')) {
        return document.location.pathname = "/"
    }
    let handleForm = () => {
        let login = document.querySelector('.login')
        let username = login.querySelector("input[name='userName']")
        let password = login.querySelector("input[name='userPassword']")
        if (username.value.length >= 6 && username.value.length <= 36) {
            if (password.value.length >= 6 && password.value.length <= 36) {
                let checked = false;
                fetch(API)
                    .then(data => data.json())
                    .then(Data => {
                        Data.forEach(item => {
                            if (item.username === md5(username.value) && item.password === md5(password.value)) {
                                localStorage.setItem('username', JSON.stringify({ fullName: item.fullName, ID: item.ID }))
                                checked = true;
                            }
                        })
                    })
                    .then(() => {
                        checked ? document.location.reload() : alert("sai tài khoản hoặc mật khẩu")
                    })
            } else {
                alert("Invalid password ( 6 - 36 characters )")
            }
        } else {
            alert("Invalid user name ( 6 - 36 characters)")
        }
    }
    return (
        <div className="main--content txt_c" style={{ padding: "5rem 0" }} >
            <div className="login">
                <h1 style={{ fontFamily: 'Courier' }}>Login</h1>
                <form className="login__form">
                    <input type="text" name="userName" placeholder="User name" />
                    <input type="password" name="userPassword" placeholder="password" />
                    <div className="login__form--account">
                        <Link to=""> <span>forget password?</span> </Link>
                        <Link to="/register"> <span>create new account</span></Link>
                    </div>
                    <button className="btn_c submit" onClick={(e) => { e.preventDefault(); handleForm() }}>LOGIN</button>
                </form>
            </div>
        </div>
    )
}
export default Login;