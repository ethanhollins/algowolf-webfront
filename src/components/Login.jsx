import React, { Component } from 'react';
import { ReactSVG } from 'react-svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser, faLock, faEnvelope
} from '@fortawesome/pro-regular-svg-icons';

class Login extends Component
{
    constructor(props)
    {
        super(props);

        this.setEmailRef = elem => {
            this.email = elem;
        }
        this.setPasswordRef = elem => {
            this.password = elem;
        }
        this.setErrorMsgRef = elem => {
            this.errorMsg = elem;
        }
    }

    state = {
        email: '',
        password: '',
        remember_me: false,
        loginCheck: true
    }

    async componentDidMount()
    {
        const { REACT_APP_APP_BASE_URL, REACT_APP_FRONT_BASE_URL } = process.env;
        let { loginCheck } = this.state;
        const user_id = await this.props.checkAuthorization();
        if (user_id === null)
        {
            loginCheck = true;
            this.setState({ loginCheck });
        }
        else
        {
            const query_string = new URLSearchParams(window.location.search);
            const auth_token = this.getCookies().get('Authorization');
            if (query_string.get("redirect"))
            {
                window.location.href = REACT_APP_APP_BASE_URL + "/login?set_token=" + encodeURIComponent(auth_token) + "&redirect=" + encodeURIComponent(query_string.get("redirect"));
            }
            else
            {
                window.location.href = REACT_APP_APP_BASE_URL + "/login?set_token=" + encodeURIComponent(auth_token) + "&redirect=" + encodeURIComponent(REACT_APP_FRONT_BASE_URL);
            }
        }
    }

    render()
    {
        const { loginCheck } = this.state;
        if (loginCheck)
        {
            return (
                <div className="aw-login container">
                    <div>
                        <a href="/">
                            <img 
                                src={process.env.PUBLIC_URL + "/images/dark-logo.svg"} 
                                alt="AlgoWolf Logo" 
                                className="aw-login logo"
                            />
                        </a>
                        <form className="aw-login form" onSubmit={this.handleSubmit.bind(this)}>
                            <div className="aw-login header">
                                Sign In
                            </div>

                            <div className="aw-login field">
                                <div className="aw-login field-header">Email</div>
                                <div className="aw-login input-parent">
                                    <input 
                                        ref={this.setEmailRef}
                                        type="username" className="aw-login input" 
                                        name="email" id="email" 
                                        placeholder="Email"
                                        autoComplete="email" required 
                                        onChange={this.handleChange} 
                                    />
                                    <span className='aw-login icon' id="email_icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                </div>
                            </div>
        
                            <div className="aw-login field">
                                <div className="aw-login field-header">Password</div>
                                <div className="aw-login input-parent">
                                    <input 
                                        ref={this.setPasswordRef}
                                        type="password" className="aw-login input" 
                                        name="password" id="password" 
                                        placeholder="Password"
                                        required onChange={this.handleChange} 
                                    />
                                    <span className='aw-login icon'>
                                        <FontAwesomeIcon icon={faLock} />
                                    </span>
                                </div>
                            </div>

                            <div className="aw-login horiz field">
                                <label className='aw-login checkbox'>
                                    <input 
                                        type='checkbox' 
                                        defaultChecked={false}
                                        onChange={this.onCheckboxInputChange.bind(this)}
                                    />
                                    <div className='aw-login checkmark'></div>
                                </label>
                                <div className="aw-login small-text">Remember Me</div>
                            </div>
        
                            <div className="aw-login field">
                                <input type="submit" id="submit" className="aw-login input" value="SIGN IN"/>
                            </div>
        
                            <div className="aw-login field center">
                                <span><a href='/send-reset'>Forgot Password?</a></span>
                            </div>
        
                            <div className="aw-login field center">
                                <span className='error' ref={this.setErrorMsgRef}></span>
                            </div>

                        </form>
                        <div className="aw-login field separator">
                            <span>OR</span>
                        </div>
                        <div className="aw-login field create-account">
                            <span><a href={'/register'+ window.location.search}>Create a free account</a> to get started with AlgoWolf</span>
                        </div>
                    </div>

                </div>
            )
        }
        else
        {
            return <React.Fragment />;
        }
    }

    onCheckboxInputChange(e)
    {
        let { remember_me } = this.state;
        remember_me = e.target.checked;
        this.setState({ remember_me });
    }

    handleChange = (event) =>
    {
        let { email, password } = this.state;
        if (event.target.name === 'email')
        {
            email = event.target.value.toLowerCase();
        }
        else if (event.target.name === 'password')
        {
            password = event.target.value;
        }
        this.setState({ email, password });
    }

    resetErrors()
    {
        this.email.style.borderColor = 'rgb(220,220,220)';
        this.email.style.borderWidth = '1px';
        this.password.style.borderColor = 'rgb(220,220,220)';
        this.password.style.borderWidth = '1px';
        this.errorMsg.textContent = "";
    }

    async handleSubmit(event)
    {
        this.resetErrors();

        const { REACT_APP_API_URL, REACT_APP_APP_BASE_URL, REACT_APP_FRONT_BASE_URL } = process.env;
        event.preventDefault();
        const raw = JSON.stringify({
            'email': this.state.email,
            'password': this.state.password,
            'remember_me': this.state.remember_me
        });
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: raw
        };

        const res = await fetch(`${REACT_APP_API_URL}/login`, requestOptions);

        const status = res.status;
        const data = await res.json();

        if (status === 200)
        {
            this.props.getCookies().set('Authorization', data.token, {
                path: '/'
            });
            this.props.setUser(data.user_id, null);

            const query_string = new URLSearchParams(window.location.search);
            if (query_string.get("redirect"))
            {
                window.location.href = REACT_APP_APP_BASE_URL + "/login?set_token=" + encodeURIComponent(data.token) + "&redirect=" + encodeURIComponent(query_string.get("redirect"));
            }
            else
            {
                window.location.href = REACT_APP_APP_BASE_URL + "/login?set_token=" + encodeURIComponent(data.token) + "&redirect=" + encodeURIComponent(REACT_APP_FRONT_BASE_URL);
            }

        }
        else
        {
            this.errorMsg.textContent = "The email or password you entered is incorrect.";
            this.password.value = "";

            this.email.style.borderColor = '#e74c3c';
            this.email.style.borderWidth = '2px';
            this.password.style.borderColor = '#e74c3c';
            this.password.style.borderWidth = '2px';
        }
    }
}

export default Login;