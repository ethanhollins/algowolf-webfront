import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEnvelope
} from '@fortawesome/pro-regular-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class SendPasswordReset extends Component
{
    constructor(props)
    {
        super(props);

        this.setEmailRef = elem => {
            this.email = elem;
        }

        this.setEmailMsgRef = elem => {
            this.emailMsg = elem;
        }
        
    }

    state = {
        email: ''
    }

    render()
    {
        return (
            <React.Fragment>
    
            <div className="home body">
                
                <Navigation2 
                    checkAuthorization={this.props.checkAuthorization}
                    getUserId={this.props.getUserId}
                    getFirstName={this.props.getFirstName}
                    getScreenWidth={this.props.getScreenWidth}
                />
    
                <div className='account-settings container password-reset'>
                    <div className='account-settings main'>
                    <div className="account-settings field-header">Enter your email address</div>
                        <div className="aw-login field">
                            <div className="aw-login input-parent">
                                <input 
                                    ref={this.setEmailRef}
                                    type="email" className="aw-login input" 
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
                        <div className="account-settings sub-field">
                            <span 
                                className="account-settings link-text"
                                name='email'
                                onClick={this.onSend.bind(this)}
                            >
                                Send Reset
                            </span>
                        </div>
                        <div className="account-settings sub-field">
                            <span
                                ref={this.setEmailMsgRef}
                                className="account-settings error-text"
                            />
                        </div>
                    </div>
                </div>

            </div>

            <div id="first-section" />

            <Footer/>

            </React.Fragment>
        );
    }

    async onSend(e)
    {
        const { REACT_APP_API_URL } = process.env;
        const { email } = this.state;

        const reqOptions = {
            method: 'POST',
            headers: this.props.getHeaders(),
            credentials: 'include',
            body: JSON.stringify({ email: email })
        }

        const res = await fetch(
            `${REACT_APP_API_URL}/v1/reset-password/send`,
            reqOptions
        );
         
        console.log(res);
        console.log(res.status);

        if (res.status === 200)
        {
            this.emailMsg.textContent = 'Successfully sent password reset email.';
            this.emailMsg.style.color = '#2ecc71';
            this.emailMsg.style.fontWeight = '500';
            return true;
        }
        else
        {
            this.emailMsg.textContent = 'Failed to send password reset email. Please make sure you are entering the same email as you signed up with.';
            this.emailMsg.style.color = '#e74c3c';
            this.emailMsg.style.fontWeight = '500';
            return false;
        }
    }

    handleChange = (e) => 
    {
        let { email } = this.state;
        email = e.target.value.toLowerCase();
        this.setState({ email });
    }

}

export default withRouter(SendPasswordReset);