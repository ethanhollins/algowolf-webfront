import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import Strategies from './Strategies';
import Banner from './Banner';
import CookiesPopup from './CookiesPopup';

class Pricing extends Component
{

    componentDidMount()
    {
        this.props.countPageVisit(window.location.pathname);
    }

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
                                <div className="pricing parent pricing-page">
                                    <div className="col-md-4 col-xs-12">
                                        <div className="pricing body pricing-page">
                                            <div className="pricing header-group">
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Standard</div>
                                                </div>
                                                <div className="pricing header-circle">
                                                    <div className="pricing price-group">
                                                        <div className="pricing price">295</div>
                                                        <div className="pricing price-currency">USD</div>
                                                    </div>
                                                    <div className="pricing price-period">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing features-group">
                                                <div>Up to <strong>10 Notebooks/Scripts</strong></div>
                                                <div><strong>Leading</strong> Data Analysis Tools</div>
                                                <div><strong>32GB</strong> Storage Space</div>
                                                <div>Up to <strong>256MB</strong> Compute Memory</div>
                                                <div><strong>GPU/CPU</strong> Cloud Compute</div>
                                                <div><strong>24 hours</strong> Monthly Compute Allowance</div>
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
                                        <div id="pricing-orange" className="pricing body pricing-page">
                                            <div className="pricing header-group" style={{ backgroundColor: "#f7a50e" }}>
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Pro</div>
                                                </div>
                                                <div className="pricing header-circle" style={{ backgroundColor: "#f7a50e" }}>
                                                    <div className="pricing price-group">
                                                        <div className="pricing price">495</div>
                                                        <div className="pricing price-currency">USD</div>
                                                    </div>
                                                    <div className="pricing price-period">
                                                        per month
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pricing features-group">
                                                <div><strong>Unlimited Notebooks/Scripts</strong></div>
                                                <div><strong>Leading</strong> Data Analysis Tools</div>
                                                <div><strong>128GB</strong> Storage Space</div>
                                                <div>Up to <strong>1GB</strong> Compute Memory</div>
                                                <div><strong>GPU/CPU</strong> Cloud Compute</div>
                                                <div><strong>48 hours</strong> Monthly Compute Allowance</div>
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
                                    <div className="col-md-4 col-xs-12 col-xs-offset-0">
                                        <div id="pricing-black" className="pricing body pricing-page">
                                            <div className="pricing header-group" style={{ backgroundColor: "#2d3436" }}>
                                                <div className="pricing title-group">
                                                    <div className="pricing title">Enterprise</div>
                                                </div>
                                                <div className="pricing header-circle" style={{ backgroundColor: "#2d3436" }}>
                                                    <div className="pricing price-group">
                                                        <div className="pricing price-small">Custom Pricing</div>
                                                    </div>
                                                    {/* <div className="pricing price-period">
                                                        per month
                                                    </div> */}
                                                </div>
                                            </div>
                                            <div className="pricing features-group">
                                                <div><strong>Unlimited Notebooks/Scripts</strong></div>
                                                <div><strong>Leading</strong> Data Analysis Tools</div>
                                                <div><strong>Custom</strong> Storage Space</div>
                                                <div><strong>Custom</strong> Compute Memory</div>
                                                <div><strong>GPU/CPU</strong> Cloud Compute</div>
                                                <div><strong>Custom</strong> Monthly Compute Allowance</div>
                                                <div>Access to <strong>Market Price Datasets</strong></div>
                                                <div>Access to AlgoWolf's <strong>Alternate Datasets</strong></div>
                                            </div>
                                            <a href="mailto:admin@algowolf.com" className="pricing purchase-group">
                                                <div className="pricing purchase-btn">
                                                    Contact Us
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-md-offset-0 col-xs-12 col-sm-offset-0">
                            <p>* On purchase confirmation, your subscription privileges will be immediately available.</p>
                        </div>
                    </div>
                </section>

                {/* <section className="se-section single-feature">
                    <div className="container">
                        <div className="row">
                            <h2 className="mtn">Additional Compute Costs</h2>
                            <div className="pricing compute-table-parent">
                                <table className="pricing compute-table">
                                    <thead>
                                        <tr>
                                            <td>GPUS</td>
                                            <td>VCPUS</td>
                                            <td>RAM</td>
                                            <td>TEMPORARY STORAGE</td>
                                            <td>ON-DEMAND PRICE</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1x RTX 6000</td>
                                            <td>6</td>
                                            <td>46 GiB</td>
                                            <td>685 GiB</td>
                                            <td>$1.25 / hr</td>
                                        </tr>
                                        <tr>
                                            <td>2x RTX 6000</td>
                                            <td>12</td>
                                            <td>92 GiB</td>
                                            <td>1.38 TiB</td>
                                            <td>$2.50 / hr</td>
                                        </tr>
                                        <tr>
                                            <td>4x RTX 6000</td>
                                            <td>24</td>
                                            <td>184 GiB</td>
                                            <td>2.79 TiB</td>
                                            <td>$5.00 / hr</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section> */}

            </div>

            <Footer/>

            <CookiesPopup 
                getCookies={this.props.getCookies}
            />

            </React.Fragment>

        );
    }

}

export default withRouter(Pricing);
