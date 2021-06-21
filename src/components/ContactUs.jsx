import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class ContactUs extends Component
{

    render()
    {
        return (
            <React.Fragment>

            <div className="home body">
                
                <Navigation2 
                    getUserId={this.props.getUserId}
                    getFirstName={this.props.getFirstName}
                />

                <div id="features-banner" className="banner body title">
                    <div className="banner inner">
                        Contact Us
                    </div>
                </div>
                
            </div>

            <section id="first-section" className="se-section gray-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 pull-right">
                            <h4 className="underline">Retina Ready</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>

                        <div className="col-md-4">
                            <h4 className="underline">Some Highlights</h4>
                            <ul className="highlights">
                                <li><i className="icon ion-checkmark"></i>Looks awesome on any device</li>
                                <li><i className="icon ion-checkmark"></i>Trusted by 2000+ users</li>
                                <li><i className="icon ion-checkmark"></i>24*7 dedicated support</li>
                                <li><i className="icon ion-checkmark"></i>Tested on 117+ devices & browsers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="se-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6 se-faq">
                            <h6 className="underline">What exactly you get with this?</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        </div>

                        <div className="col-md-6 col-sm-6 se-faq">
                            <h6 className="underline">How do you decide charges for this?</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        </div>

                        <div className="col-md-6 col-sm-6 se-faq">
                            <h6 className="underline">What are deliverables in this service?</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        </div>

                        <div className="col-md-6 col-sm-6 se-faq">
                            <h6 className="underline">How many resources are involved?</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(ContactUs);
