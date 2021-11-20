import React, { useState } from "react";
import {axiosInstance} from "../util/requsets";
import {useHistory} from "react-router";

const Register = () => {
    let history = useHistory();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState("Name couldn't be empty");
    const [emailError, setEmailError] = useState("Email couldn't be empty");
    const [passwordError, setPasswordError] = useState("Password couldn't be empty");
    const [formValid, setFormValid] = useState(false);

    const blurHandler = (e) => {
        switch (e.target.name){
            case 'name':
                setNameDirty(true);
                break;
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

    const nameHandler = (e) => {
        setName(e.target.value);
        if (e.target.value.length < 4) {
            setNameError('Name is too short');
        } else {
            setNameError('');
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
        if (e.target.value.length < 5) {
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
        if (formValid) {
            console.log('start request');
            const data =  {
                name: name,
                email: email,
                password: password,
            };
            axiosInstance.post('/signup', data).then((res) => {
                localStorage.setItem('_token', res.data);
                history.push('/');
            }).catch((reason) => {
                console.log('error:', reason);
            });
        }
    }

    return(
        <div>
            <div className="form">
                <div className="form_title">Sign up</div>
                {(nameDirty && nameError) && <div className="error">{nameError}</div>}
                {(emailDirty && emailError) && <div className="error">{emailError}</div>}
                {(passwordDirty && passwordError) && <div className="error">{passwordError}</div>}
                <div className="form_group">
                    <input className="form_input"
                           placeholder=" "
                           type="text"
                           name="name"
                           value={name}
                           onBlur={blurHandler}
                           onChange={nameHandler}
                    />
                    <label className="form_label">Name</label>
                </div>
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
                <button className="form_button" onClick={onHandleSubmit}>Sign up</button>
            </div>
            <label className="redirect">Already have an account?<a href="/auth" className="link">Sign in</a></label>
        </div>
    )
}

export default Register;