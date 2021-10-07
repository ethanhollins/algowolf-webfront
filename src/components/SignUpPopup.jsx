import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SignUpPopup extends Component
{
    render()
    {
        const { REACT_APP_FRONT_BASE_URL } = process.env;
        
        return (
            <div className="signup background">
                <div className="signup body">
                    <div className="signup container">
                        <div className="signup header">
                            Sign Up FREE Now<br/>to access the HG Pro page.
                        </div>
                        <a href={REACT_APP_FRONT_BASE_URL + "/register?redirect=" + encodeURIComponent(window.location.href)} className="signup signup-btn">
                            SIGN UP FREE
                        </a>
                        <a href={REACT_APP_FRONT_BASE_URL + "/login?redirect=" + encodeURIComponent(window.location.href)} className="signup login-link">
                            Login with an Existing Account
                        </a>
                    </div>
                </div>
            </div>
        );
    }

}

export default withRouter(SignUpPopup);
