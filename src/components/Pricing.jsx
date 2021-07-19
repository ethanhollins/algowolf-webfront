import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import Strategies from './Strategies';
import Banner from './Banner';

class Pricing extends Component
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
                    isNoBorder={true}
                />
                

                <section className="se-section single-feature">
                    <div className="container feature-desc">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1 col-xs-12 col-xs-offset-0">
                                <h2 className="mtn">Pricing</h2>
                                <div className="pricing parent">
                                    <div className="col-md-6 col-xs-12">
                                        <div className="pricing body">
                                            <div className="pricing header-group">
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Standard</div>
                                                </div>
                                                <div className="pricing header-circle">
                                                    <div className="pricing price-group">
                                                        <div className="pricing price">59</div>
                                                        <div className="pricing price-currency">USD</div>
                                                    </div>
                                                    <div className="pricing price-period">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing features-group">
                                                <div>Live Trade the HolyGrail Pro Algorithm</div>
                                                <div>Automatic Order Execution</div>
                                                <div>Personalize to Your Own Requirements</div>
                                                <div>Immediate access to Improvements/Updates</div>
                                                <div>Access to New Strategies in this Package</div>
                                                <div>Up to 100K Tradable Bank</div>
                                                <div>14 Day Cash Back Guarantee</div>
                                            </div>
                                            <div className="pricing purchase-group">
                                                <div className="pricing purchase-btn">
                                                    Currently Unavailable
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12 col-xs-offset-0">
                                        <div id="pricing-black" className="pricing body">
                                            <div className="pricing header-group" style={{ backgroundColor: "#2d3436" }}>
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Premium</div>
                                                </div>
                                                <div className="pricing header-circle" style={{ backgroundColor: "#2d3436" }}>
                                                    <div className="pricing price-group">
                                                        <div className="pricing price">99</div>
                                                        <div className="pricing price-currency">USD</div>
                                                    </div>
                                                    <div className="pricing price-period">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing features-group">
                                                <div>Live Trade the HolyGrail Pro Algorithm</div>
                                                <div>Automatic Order Execution</div>
                                                <div>Personalize to Your Own Requirements</div>
                                                <div>Immediate access to Improvements/Updates</div>
                                                <div>Access to New Strategies in this Package</div>
                                                <div>Scalable Tradable Bank</div>
                                                <div>14 Day Cash Back Guarantee</div>
                                            </div>
                                            <div className="pricing purchase-group">
                                                <div className="pricing purchase-btn">
                                                    Currently Unavailable
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <div id="first-section"></div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(Pricing);
