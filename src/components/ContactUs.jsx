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

class ContactUs extends Component
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

                <div id="features-banner" className="banner body title">
                    <div className="banner inner">
                        Contact Us
                    </div>
                </div>
                
            </div>

            <section id="first-section" className="se-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">Got any questions or need help?</h4>
                            <p><strong>Support Team:</strong> <a href="mailto:support@algowolf.com">support@algowolf.com</a></p>
                            <p>Tymraft Pty Ltd<br/>ABN: 51 006 268 131</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer2/>

            <CookiesPopup 
                getCookies={this.props.getCookies}
            />

            </React.Fragment>

        );
    }

}

export default withRouter(ContactUs);
