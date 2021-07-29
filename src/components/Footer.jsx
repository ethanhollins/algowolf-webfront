import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends Component
{
    render()
    {
        return (
            <footer className="light-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-3 col-xs-4">
                            <a href="/">
                                <img src="/images/dark-logo.svg" alt="AlgoWolf Logo" className="footer-logo"/>
                            </a>
                        </div>

                        <div className="col-md-3 col-sm-3 col-xs-4">
                            <h6 className="mtn">App</h6>
                            <ul>
                                <li><a href="/app">Dashboard</a></li>
                                <li><a href="/">Home</a></li>
                                <li><a href="/pricing">Pricing</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-3 col-xs-4">
                            <h6 className="mtn">Other Pages</h6>
                            <ul>
                                <li><a href="/contact-us">Contact Us</a></li>
                                <li><a href="/legal">Legal</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row footer-bottom">
                        <div className="col-md-12">
                            <p>Copyright &copy; AlgoWolf. 2021. All Rights Reserved.</p>
                            <p>AlgoWolf is a software development company and does not provide investment or brokerage services. AlgoWolf is a trading name of Tymraft Pty Ltd, ACN: 006 268 131.</p>
                            <p>By registering an account with this website or using this website or any of our products or services you agree that you unconditionally accept and abide by our <a href="/tos">Terms & Conditions</a> and the <a href="/risk-disclosure">Risk Disclosure and Disclaimer agreement</a>.</p>
                            <p>EVERY TIME YOU USE OUR PRODUCTS OR SERVICE YOU AGREE THAT IN ALL CASES ALGOWOLF BEARS NO RESPONSIBILITY FOR LOSSES INCURRED, AND OFFERS NO GUARANTEES OR EXPECTATIONS OF ANY ALGORITHM PERFORMANCE OR STABILITY.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
    
}

export default withRouter(Footer);