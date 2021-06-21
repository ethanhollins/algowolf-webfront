import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH
} from '@fortawesome/pro-light-svg-icons';

class Home2 extends Component
{

    render()
    {
        return (
            <React.Fragment>

            <div className="nav body">
                <div>
                    <a href="/">
                        <img 
                            src={process.env.PUBLIC_URL + "/images/dark-logo.svg"} 
                            alt="AlgoWolf Logo" className="nav logo"
                        />
                    </a>
                    {this.getLoginGroup()}
                </div>
            </div>

            <div className="nav-links body">
                <div className="nav-links link-btn">
                    <FontAwesomeIcon className='nav-links btn-icon' icon={faSlidersH} />
                    Dashboard
                </div>
                {/* <div className="nav-links vert-separator" /> */}
                <a className="nav-links link-btn" href="/">Home</a>
                <a className="nav-links link-btn" href="/strategies">Strategies</a>
                <a className="nav-links link-btn" href="/features">Features</a>
                <a className="nav-links link-btn" href="/faq">FAQ</a>
                <a className="nav-links link-btn" href="/contact-us">Contact Us</a>
            </div>

            <div className="nav-links separator"></div>

            </React.Fragment>

        );
    }

    getLoginGroup = () =>
    {
        if (this.props.getUserId() !== null)
        {
            return (
                <div className="nav right">
                    <div className="nav login-group">
                        <div className="nav login-msg">Welcome <div className="nav login-name">{this.props.getFirstName()}</div>.</div>
                        <div className="nav login-btn">Logout</div>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="nav right">
                    <div className="nav login-group">
                        <div className="nav login-btn">Sign In</div>
                        <div className="nav signup-btn">Sign Up</div>
                    </div>
                </div>
            );
        }
    }

}

export default withRouter(Home2);
