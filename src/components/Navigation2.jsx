import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlidersH, faTimes } from '@fortawesome/pro-light-svg-icons';
import { faBars } from '@fortawesome/pro-regular-svg-icons';

class Home2 extends Component
{
    constructor(props)
    {
        super(props);

        this.setDropdownParentRef = elem =>
        {
            this.dropdownParent = elem;
        }
    }

    state = {
        is_menu: false
    }

    componentDidMount()
    {
        this.props.checkAuthorization();
    }

    render()
    {
        return (
            <React.Fragment>

            {this.getNav()}

            { !this.props.isNoBorder ? <div className="nav-links separator"></div> : <React.Fragment/>}

            </React.Fragment>
        );
    }

    getNav = () =>
    {
        const screen_width = this.props.getScreenWidth();
        if (screen_width <= 780)
        {
            return (
                <React.Fragment>
    
                <div className="nav body">
                    <div>
                        <div className="nav logo-parent">
                            <a href="/">
                                <img 
                                    src={process.env.PUBLIC_URL + "/images/dark-logo.svg"} 
                                    alt="AlgoWolf Logo" className="nav logo"
                                />
                            </a>
                        </div>
                        {this.getLoginGroup()}
                    </div>
                </div>

                <div className="nav-links body">
                    <div className="nav-links link-btn" onClick={this.onMenu}>
                        {this.getMenuBtn()}
                    </div>
                </div>

                <div ref={this.setDropdownParentRef} className="nav-links dropdown-parent">
                    <div className="nav-links dropdown">
                        <a href="/app" className="nav-links link-btn">
                            <FontAwesomeIcon className='nav-links btn-icon' icon={faSlidersH} />
                            Dashboard
                        </a>
                        <a className="nav-links link-btn" href="/">Home</a>
                        {/* <a className="nav-links link-btn" href="/strategies">Strategies</a> */}
                        {/* <a className="nav-links link-btn" href="/faq">FAQ</a> */}
                        <a className="nav-links link-btn" href="/pricing">Pricing</a>
                        <a className="nav-links link-btn" href="/contact-us">Contact Us</a>
                        <a className="nav-links link-btn" href="/legal">Legal</a>
                    </div>
                </div>
    
                </React.Fragment>
            );
        }
        else
        {
            return (
                <React.Fragment>
    
                <div className="nav body">
                    <div>
                        <div className="nav logo-parent">
                            <a href="/">
                                <img 
                                    src={process.env.PUBLIC_URL + "/images/dark-logo.svg"} 
                                    alt="AlgoWolf Logo" className="nav logo"
                                />
                            </a>
                        </div>
                        {this.getLoginGroup()}
                    </div>
                </div>
    
                <div className="nav-links body">
                    <a href="/app" className="nav-links link-btn">
                        <FontAwesomeIcon className='nav-links btn-icon' icon={faSlidersH} />
                        Dashboard
                    </a>
                    {/* <div className="nav-links vert-separator" /> */}
                    <a className="nav-links link-btn" href="/">Home</a>
                    {/* <a className="nav-links link-btn" href="/strategies">Strategies</a> */}
                    {/* <a className="nav-links link-btn" href="/faq">FAQ</a> */}
                        <a className="nav-links link-btn" href="/pricing">Pricing</a>
                    <a className="nav-links link-btn" href="/contact-us">Contact Us</a>
                    <a className="nav-links link-btn" href="/legal">Legal</a>
                </div>
    
                </React.Fragment>
            );
        }
    }

    getLoginGroup = () =>
    {
        if (this.props.getUserId() !== null)
        {
            return (
                <div className="nav right">
                    <div className="nav login-group">
                        <div className="nav login-msg">Hi <span className="login-name">{this.props.getFirstName()}</span>.</div>
                        <a className="nav login-btn" href="/logout">Logout</a>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="nav right">
                    <div className="nav login-group">
                        <a className="nav login-btn" href="/login">Sign In</a>
                        <a className="nav signup-btn" href="/register">Sign Up</a>
                    </div>
                </div>
            );
        }
    }

    

    onMenu = () =>
    {
        let { is_menu } = this.state;
        if (is_menu)
        {
            this.dropdownParent.className = "nav-links dropdown-parent";
        }
        else
        {
            this.dropdownParent.className = "nav-links dropdown-parent dropdown-anim";
        }
        is_menu = !is_menu;
        this.setState({ is_menu });
    }

    getMenuBtn = () =>
    {
        const { is_menu } = this.state;
        
        if (is_menu)
        {
            return <FontAwesomeIcon className='nav-links btn-icon' icon={faTimes} />;
        }
        else
        {
            return <FontAwesomeIcon className='nav-links btn-icon' icon={faBars} />;
        }
    }

}

export default withRouter(Home2);
