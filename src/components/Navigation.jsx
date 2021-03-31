import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Navigation extends Component
{

    constructor(props)
    {
        super(props);

        this.setNavRef = elem => {
            this.nav = elem;
        }
        this.setLightLogoRef = elem => {
            this.lightLogo = elem;
        }
        this.setDarkLogoRef = elem => {
            this.darkLogo = elem;
        }
    }

    componentDidMount()
    {
        window.addEventListener("scroll", this.onScroll.bind(this));

        if (this.props.isHome)
        {
            this.lightLogo.classList.toggle('logo-fade-in');
        }
    }

    render()
    {
        return (
            <nav 
                ref={this.setNavRef}
                className={"navbar yamm navbar-fixed-top header_transparent"}
                role="navigation"
            >
                <div className="container-fluid full-width">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">
                            {this.getLogo()}
                        </a>
                    </div>

                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav pull-right">
                            {/* <li className="">
                                <a href="/" className="" >Home </a>
                            </li> */}
                            <li className="">
                                <a href="/automated-trading" className="" >Automated Trading </a>
                            </li>
                            <li className="">
                                <a href="/holygrail" className="" >Prison Paycheck </a>
                            </li>
                            {/* <li className="dropdown dd-left">
                                <a href="/automated" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Automated Trading <span className="caret"></span></a>
                                <ul className="dropdown-menu animated fadeIn">
                                    <li>
                                        <div className="yamm-content">
                                            <div className="nav-col">
                                                <ul>
                                                    <li><a href="/automated">Getting Started</a></li>
                                                    <li><a href="/automated">Beta Testing</a></li>
                                                    <li><a href="/automated">Pricing</a></li>
                                                    <li><a href="/automated">Goto App</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li> */}
                            {/* <li className="dropdown dd-left">
                                <a href="/holygrail" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Prison Paycheck <span className="caret"></span></a>
                                <ul className="dropdown-menu animated fadeIn">
                                    <li>
                                        <div className="yamm-content">
                                            <div className="nav-col">
                                                <ul>
                                                    <li><a href="/holygrail">Getting Started</a></li>
                                                    <li><a href="/holygrail/instructions">Instructions</a></li>
                                                    <li><a href="/holygrail/demo">Goto Live Signal Charts</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li> */}

                            <li><a href="/login">Sign In</a></li>
                            <li className="nav-btn-wrap">
                                <span className="nav-btn"><a href="/register" className="btn se-btn-black btn-rounded sign-up">Sign Up</a></span>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        );
    }

    onScroll(e)
    {

        if (window.scrollY === 0 && !this.nav.classList.contains('header_transition'))
        {
            this.nav.classList.toggle('header_transition');
            if (this.props.isHome && this.lightLogo.style.display !== 'block')
            {
                this.lightLogo.style.display = 'block';
                this.darkLogo.style.display = 'none';
                this.lightLogo.classList.toggle('logo-fade-in');
                this.darkLogo.classList.toggle('logo-fade-in');
            }
        }
        else
        {
            if (this.nav.classList.contains('header_transition'))
            {
                this.nav.classList.toggle('header_transition');
            }
            if (this.props.isHome && this.darkLogo.style.display !== 'block')
            {
                this.lightLogo.style.display = 'none';
                this.darkLogo.style.display = 'block';
                this.lightLogo.classList.toggle('logo-fade-in');
                this.darkLogo.classList.toggle('logo-fade-in');
            }
        }
    }

    getLogo()
    {
        if (this.props.isHome)
        {
            return (
                <React.Fragment>

                <img 
                    ref={this.setLightLogoRef}
                    src={process.env.PUBLIC_URL + "images/light-logo.svg"} 
                    alt="AlgoWolf Logo" className="logo-default"
                />
                <img 
                    ref={this.setDarkLogoRef}
                    src={process.env.PUBLIC_URL + "images/dark-logo.svg"} 
                    alt="AlgoWolf Logo" 
                    className="logo-default"
                    style={{display: 'none'}}
                />

                </React.Fragment>
            );
        }
        else
        {
            return(
                <React.Fragment>

                <img 
                    ref={this.setDarkLogoRef}
                    src={process.env.PUBLIC_URL + "images/dark-logo.svg"} 
                    alt="AlgoWolf Logo"
                />

                </React.Fragment>
            );
        }
    }
    
}

export default withRouter(Navigation);