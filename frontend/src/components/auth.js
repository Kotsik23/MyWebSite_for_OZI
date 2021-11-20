import React, { useState } from "react";
import {axiosInstance} from "../util/requsets";
import {useHistory} from "react-router";

const Auth = () => {
    let history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState("Email couldn't be empty");
    const [passwordError, setPasswordError] = useState("Password couldn't be empty");
    const [formValid, setFormValid] = useState(false);
    const [loggedIn, setLoggedIn] = useState(true);

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    }

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
        if (!e.target.value.match(re)){
            setEmailError('Incorrect e-mail');
        } else {
            setEmailError('');
        }
        validateForm();
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length <= 3) {
            setPasswordError('Password is too short');
            if (!e.target.value) {
                setPasswordError("Password couldn't be empty");
            }
        } else {
            setPasswordError('');
        }
        validateForm();
    }

    const validateForm = () => {
        if (emailError || passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }

    const onHandleSubmit = () => {
        const data = {
            email: email,
            password: password,
        }
        if (formValid) {
            console.log('start request');
            // fetch('http://localhost:2525/signin', {method: 'post', body: JSON.stringify(data), "Content-Type" : "application/json"})
            //     .then((res) => {
            //         if (res.status === 200) {
            //             return res.json();
            //         } else {
            //             setLoggedIn(false);
            //         }
            //     })
            //     .then((token) => {
            //         if (typeof token === "undefined") {
            //             return;
            //         }
            //         console.log(token)
            //         localStorage.setItem('_token', token.token);
            //         console.log(localStorage.getItem("_token"))
            //         setLoggedIn(true);
            //         history.push('/');
            //     })
            //     .catch((reason) => {
            //         setLoggedIn(false);
            //         console.log('error', reason);
            //     });
            axiosInstance.post('/signin', data).then((res) => {
                console.log(res.data);
                // const token = JSON.parse(res.data);
                localStorage.setItem('_token', res.data);
                if (res.status === 404) {
                    setLoggedIn(false);
                } else {
                    setLoggedIn(true);
                    history.push('/');
                }
            }).catch((reason) => {
                setLoggedIn(false);
                console.log('error', reason);
            });
        }
    }

    return(
        <div>
            <div className="form">
                <div className="form_title">Sign in</div>
                {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
                {(!loggedIn) && <div className="error" style={{color: 'purple', textSize: 12}}>User with this email/password doesn't exist</div>}
                <div className="form_group">
                    <input className="form_input"
                           placeholder=" "
                           type="email"
                           name="email"
                           value={email}
                           onBlur={blurHandler}
                           onChange={emailHandler}
                    />
                    <label className="form_label">Email</label>
                </div>
                <div className="form_group">
                    <input className="form_input"
                           placeholder=" "
                           type="password"
                           name="password"
                           value={password}
                           onBlur={blurHandler}
                           onChange={passwordHandler}
                    />
                    <label className="form_label">Password</label>
                </div>
                <button className="form_button" onClick={onHandleSubmit}>Sign in</button>
            </div>
            <label className="redirect">Need an account?<a href="/reg" className="link">Sign up</a></label>
        </div>
    )
}

export default Auth;