import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../ConfigAPI/ConfigAPI'
import './login.css'
const md5 = require('md5')
function Register() {
    document.title = "register"
    // check account
    if (localStorage.getItem('username')) {
        return document.location.pathname = "/"
    }
    let DataFetchAPI = []

    let handleForm = () => {
        let login = document.querySelector('.login')
        let username = login.querySelector("input[name='userName']")
        let password = login.querySelector("input[name='userPassword']").value
        let passwordAgain = login.querySelector("input[name='userPasswordAgain']").value
        let fullName = login.querySelector("input[name='yourName']")
        let date = login.querySelector("input[type='date']")

        if (username.value.length >= 6 && username.value.length <= 36 && password.length >= 6 && password.length <= 36) {
            if (fullName.value !== '' && date.value !== '' && password === passwordAgain) {
                let data = {
                    username: md5(username.value),
                    password: md5(password),
                    date: date.value,
                    fullName: fullName.value
                }

                if (DataFetchAPI.some(item => item.username === username.value)) {
                    alert("tài khoản đã có người đăng kí")
                } else {
                    localStorage.setItem('username', JSON.stringify(data))
                    fetch(`${API}`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    })
                        .then((response) => response.json())
                        .then((result) => {
                            document.location.reload()
                            console.log('Success:', result);
                        })
                        .catch((error) => {
                            document.location.reload()
                            console.error('Error:', error);
                        });
                }
            }
        }
        else {
            alert("Invalid! userName or password ( 6 - 36 characters)")
        }
        fullName.value.length >= 6 ? fullName.style.borderColor = "#00ff1b" : fullName.style.borderColor = "red"
        username.value.length >= 6 ? username.style.borderColor = "#00ff1b" : username.style.borderColor = "red"
        date.value !== '' ? date.style.borderColor = '#00ff1b' : date.style.borderColor = 'red'

    }
    let handlePassword = () => {
        let login = document.querySelector('.login')
        let password = login.querySelector("input[name='userPassword']")
        let passwordAgain = login.querySelector("input[name='userPasswordAgain']")
        if (password.value !== '' && passwordAgain.value !== '') {
            if (password.value.length >= 6 && password.value === passwordAgain.value) {
                password.style.borderColor = "#00ff1b"
                passwordAgain.style.borderColor = "#00ff1b"
            } else {
                password.style.borderColor = "red"
                passwordAgain.style.borderColor = "red"
            }
        } else {
            password.style.borderColor = "#6633998a"
            passwordAgain.style.borderColor = "#6633998a"
        }
    }

    window.onload = function () {
        fetch(`${API}`)
            .then(res => res.json())
            .then(data => {
                DataFetchAPI = [...data]
            })
    }

    return (
        <div className="main--content txt_c" style={{ padding: "5rem 0" }} >
            <div className="login">
                <h1 style={{ fontFamily: 'Courier' }}>REGISTER</h1>
                <form className="login__form">
                    <div>
                        <label htmlFor="firstName">Your Name:</label>
                        <input id="firstName" type="text" name="yourName" placeholder="User name" />
                        <label htmlFor="date">Date of birth:</label>
                        <input id="date" type="date" name="date" min="1950-01-01" max="2018-12-31" />
                    </div>

                    <input type="text" name="userName" placeholder="User name" />
                    <input type="password" name="userPassword" placeholder="password" onChange={() => handlePassword()} />
                    <input type="password" name="userPasswordAgain" placeholder="password again" onChange={() => handlePassword()} />
                    <div className="login__form--account">
                        <Link to=""> <span>forget password?</span> </Link>
                        <Link to="/register"> <span>create new account</span></Link>
                    </div>
                    <button className="btn_c submit" onClick={(e) => { e.preventDefault(); handleForm() }}>REGISTER</button>
                </form>
            </div>
        </div>
    )
}
export default Register;