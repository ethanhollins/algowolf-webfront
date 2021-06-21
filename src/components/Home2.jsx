import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class Home2 extends Component
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

                <div id="hg-banner" className="banner body">
                    <div>
                        <div id="hg-title-1">HolyGrail PRO</div>
                        <div id="hg-title-2">OUT NOW!</div>
                    </div>
                    <div id="hg-btn-group">
                        <div id="hg-btn-1">Add to Dashboard</div>
                        <div id="hg-btn-2">See Results</div>
                    </div>
                </div>

                <div className="cat-strategies body">
                    <div className="cat-strategies header-body">
                        <h1 className="cat-strategies header">Strategies</h1>
                        <span>See All</span>
                    </div>
                    <div className="cat-strategies table">
                        <div className="cat-strategies item">
                            <div className="cat-strategies item-header-group">
                                <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon.jpg"}/>
                                <div className="cat-strategies title">
                                    <span className="cat-strategies item-header">HolyGrail PRO</span>
                                    <div className="cat-strategies strategy-label"><span>AlgoWolf's Choice</span></div>
                                </div>
                            </div>
                            <div className="cat-strategies stat-group">
                                <div>
                                    <div className="cat-strategies stat">
                                        <div className="cat-strategies stat-header">Commissions</div>
                                        <div className="cat-strategies stat-body" style={{color: "#27ae60"}}>31%</div>
                                    </div>
                                    <div className="cat-strategies stat">
                                        <div className="cat-strategies stat-header">GPR</div>
                                        <div className="cat-strategies stat-body">11.82</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat-strategies btn-group">
                                <div className='cat-strategies cat-btn-parent'>
                                    <FontAwesomeIcon className='cat-strategies cat-btn' icon={faArrowCircleRight} />
                                    <div className="cat-strategies anim-text">
                                        <span>More Info</span>
                                    </div>
                                </div>
                                <div className='cat-strategies cat-btn-parent'>
                                    <FontAwesomeIcon className='cat-strategies cat-btn add' icon={faPlusCircle} />
                                    <div className="cat-strategies anim-text">
                                        <span>Add to Dashboard</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cat-strategies item">
                            <div className="cat-strategies item-header-group">
                                <img className="cat-strategies icon" src={process.env.PUBLIC_URL + "/holygrail_icon_classic.jpg"}/>
                                <div className="cat-strategies title">
                                    <span className="cat-strategies item-header">HolyGrail Classic</span>
                                </div>
                            </div>
                            <div className="cat-strategies stat-group">
                                <div>
                                    <div className="cat-strategies stat">
                                        <div className="cat-strategies stat-header">Commissions</div>
                                        <div className="cat-strategies stat-body" style={{color: "#e74c3c"}}>161%</div>
                                    </div>
                                </div>
                            </div>
                            <div className="cat-strategies btn-group">
                                <div className='cat-strategies cat-btn-parent'>
                                    <FontAwesomeIcon className='cat-strategies cat-btn' icon={faArrowCircleRight} />
                                    <div className="cat-strategies anim-text">
                                        <span>More Info</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="cat-strategies body">
                    <div className="cat-strategies header-body">
                        <h1 className="cat-strategies header">Features</h1>
                    </div>
                </div>

                <div className="cat-strategies body">
                    <div className="cat-strategies header-body">
                        <h1 className="cat-strategies header">Pricing</h1>
                    </div>
                </div> */}
                
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

            {/* <section className="se-section primary-bg">
                <div className="container">
                    <div className="row text-center">
                        <h3>Get Started Today!</h3>
                        <p>Sign up now to </p>
                        <a href="mailto:admin@algowolf.com" className="btn se-btn-black btn-rounded">Sign Up Now!</a>
                    </div>
                </div>
            </section> */}

            {/* <section className="se-section pricing">
                <div className="container">
                    <div className="row">

                        <div className="col-md-2 col-sm-3"/>
                        <div className="col-md-4 col-sm-6">
                            <div className="se-plan plan-popular">
                                <div className="plan-header">
                                    <span className="strike">US$795 /mo</span>
                                    <h2>US$495 <small>/mo</small></h2>
                                    <p>Gold Plan</p>
                                </div>

                                <div className="plan-features">
                                    <ul>
                                        <li>Basic Tool-bar <i className="icon ion-ios-information-outline" data-toggle="tooltip" data-placement="bottom" title="Some more information about this one"></i></li>
                                        <li>Free Templates <i className="icon ion-ios-information-outline" data-toggle="tooltip" data-placement="bottom" title="Some more information about this one"></i></li>
                                        <li>No PDF Download <i className="icon ion-ios-information-outline" data-toggle="tooltip" data-placement="bottom" title="Some more information about this one"></i></li>
                                        <li>Up-to 5,000 Records</li>
                                        <li>Only 20 Users</li>
                                        <li>Use 5,000 hours</li>
                                        <li>Invite 50 Friends</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 col-sm-6">
                            <div className="se-plan">
                                <div className="plan-header">
                                    <span className="strike">US$7495 /yr</span>
                                    <h2>US$4995 <small>/yr</small></h2>
                                    <p>Platinum Plan</p>
                                </div>

                                <div className="plan-features">
                                    <ul>
                                        <li>Premium Tool-bar <i className="icon ion-ios-information-outline" data-toggle="tooltip" data-placement="bottom" title="Some more information about this one"></i></li>
                                        <li>Premium Templates <i className="icon ion-ios-information-outline" data-toggle="tooltip" data-placement="bottom" title="Some more information about this one"></i></li>
                                        <li>Download PDF Invoice <i className="icon ion-ios-information-outline" data-toggle="tooltip" data-placement="bottom" title="Some more information about this one"></i></li>
                                        <li>Up-to 50,000 Records</li>
                                        <li>Only 20 Users</li>
                                        <li>Use 50,000 hours</li>
                                        <li>Invite 500 Friends</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-3"/>

                    </div>
                </div>
            </section> */}

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(Home2);
