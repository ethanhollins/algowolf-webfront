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
                

                <section className="se-section single-feature pricing-page">
                    <div className="home container">
                        <div className="row">
                            <div className="col-md-12 col-md-offset-0 col-xs-12 col-sm-offset-0">
                                <h2 className="mtn">Pricing</h2>
                                <div className="pricing parent pricing-page">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="pricing body pricing-page">
                                            <div className="pricing header-group">
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Standard</div>
                                                </div>
                                                <div className="pricing header-circle">
                                                    <div className="pricing price-group">
                                                        <div className="pricing price">29</div>
                                                        <div className="pricing price-currency">USD</div>
                                                    </div>
                                                    <div className="pricing price-period">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing features-group">
                                                <div>Up to <strong>5 Strategies</strong></div>
                                                <div>Up to <strong>10 Notebooks</strong></div>
                                                <div><strong>12GB</strong> Storage Space</div>
                                                <div><strong>CPU</strong> Cloud Compute</div>
                                                <div>Up to <strong>128MB</strong> Compute Memory</div>
                                                <div>Access to <strong>Market Price Datasets</strong></div>
                                                <div></div>
                                            </div>
                                            <div className="pricing purchase-group">
                                                <div className="pricing purchase-btn">
                                                    Currently Unavailable
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-offset-0">
                                        <div id="pricing-black" className="pricing body pricing-page">
                                            <div className="pricing header-group" style={{ backgroundColor: "#2d3436" }}>
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Pro</div>
                                                </div>
                                                <div className="pricing header-circle" style={{ backgroundColor: "#2d3436" }}>
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
                                                <div>Up to <strong>10 Strategies</strong></div>
                                                <div><strong>Unlimited Notebooks</strong></div>
                                                <div><strong>64GB</strong> Storage Space</div>
                                                <div><strong>GPU/CPU</strong> Cloud Compute</div>
                                                <div>Up to <strong>512MB</strong> Compute Memory</div>
                                                <div>Access to <strong>Market Price Datasets</strong></div>
                                                <div></div>
                                            </div>
                                            <div className="pricing purchase-group">
                                                <div className="pricing purchase-btn">
                                                    Currently Unavailable
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-xs-12 col-xs-offset-0">
                                        <div id="pricing-black" className="pricing body pricing-page">
                                            <div className="pricing header-group" style={{ backgroundColor: "#2d3436" }}>
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Pro+</div>
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
                                                <div><strong>Unlimited Strategies</strong></div>
                                                <div><strong>Unlimited Notebooks</strong></div>
                                                <div><strong>256GB</strong> Storage Space</div>
                                                <div><strong>GPU/CPU</strong> Cloud Compute</div>
                                                <div>Up to <strong>2GB</strong> Compute Memory</div>
                                                <div>Access to <strong>Market Price Datasets</strong></div>
                                                <div>Access to AlgoWolf's <strong>Alternate Datasets</strong></div>
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
