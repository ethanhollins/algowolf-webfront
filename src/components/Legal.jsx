import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import CookiesPopup from './CookiesPopup';
import Footer2 from './Footer2';

class Legal extends Component
{

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

                <div className="banner body title">
                    <div className="banner inner">
                        LEGAL
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item legal">
                        <p><strong>By registering an account with this website or using this website or any of our products or services you agree that you unconditionally accept and abide by the following documents:</strong></p>
                        <p><a href="/tos"><strong>TERMS OF USE & CONDITIONS OF SERVICE POLICY</strong></a></p>
                        <p><a href="/risk-disclosure"><strong>RISK DISCLOSURE STATEMENT & PERFORMANCE DISCLAIMER AGREEMENT</strong></a></p>
                        <p><a href="/privacy-policy"><strong>PRIVACY POLICY</strong></a></p>
                        <p><a href="/cookies-policy"><strong>COOKIES POLICY</strong></a></p>
                    </div>
                </section>
            
            </div>

            <div id="first-section" />

            <Footer2/>

            <CookiesPopup 
                getCookies={this.props.getCookies}
            />

            </React.Fragment>

        );
    }

}

export default withRouter(Legal);
