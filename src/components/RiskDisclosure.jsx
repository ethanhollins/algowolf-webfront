import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class RiskDisclosure extends Component
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
                        RISK DISCLOSURE STATEMENT AND PERFORMANCE DISCLAIMER AGREEMENT
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item legal">
                        <p>By registering an account with this website or using this website or any of our products or services you agree that you unconditionally accept and abide by our Terms & Conditions and this Risk Disclosure and Disclaimer agreement.</p>
                        <p><strong>EVERY TIME YOU USE OUR PRODUCTS OR SERVICE YOU AGREE THAT IN ALL CASES ALGOWOLF BEARS NO RESPONSIBILITY FOR LOSSES INCURRED, AND OFFERS NO GUARANTEES OR EXPECTATIONS OF OUR ALGORITHM PERFORMANCE OR STABILITY.</strong></p>
                        <p>YOU FURTHER AGREE THAT IN NO EVENT SHALL ALGOWOLF, INCLUDING ITS DIRECTORS AND REPRESENTATIVES, BE ACCOUNTABLE OR HELD LIABLE FOR ANY FINANCIAL LOSSES, INJURY, DAMAGES OR COSTS YOU MAY INCUR FROM THE USE OF OUR WEBSITE OR ANY OF OUR SOFTWARE.</p>
                        <p><strong>Risk Disclosure:</strong> AlgoWolf is a software development company and does not provide investment or brokerage services. BEFORE YOU MAKE ANY DECISION IN RELATION TO USING OUR SERVICES YOU SHOULD SEEK INDEPENDENT PROFESSIONAL ADVICE. </p>
                        <p>It is your responsibility to consult your financial advisor to determine whether trading in securities and derivatives products is appropriate for you in light of your financial circumstances as this brief statement cannot disclose all the risks and other significant aspects of trading such markets.</p>
                        <p>Trading derivatives and leveraged products carries a high level of risk and can lead to large losses including the possibility of losing all or more than your initial investment. You should carefully consider your investment objectives, level of experience and risk appetite. Most importantly, do not invest money you cannot afford to lose.</p>
                        <p>Information & products on this site are not directed at residents in any country or jurisdiction where such distribution or use would be contrary to local law or regulation. The information on this website is of a general nature only and does not consider your objectives, financial situation or needs. Every effort is made to provide information that is accurate, however information is subject to change at any time without notice. </p>
                        <p>ALGOWOLF CANNOT GUARANTEE, AND ASSUMES NO LEGAL LIABILITY OR RESPONSIBILITY FOR THE RELEVANCE, ACCURACY, CURRENCY OR COMPLETENESS OF THE INFORMATION. </p>
                        <p><strong>Performance Disclaimer:</strong> Information containing hypothetical or simulated results has limitations and may not represent actual trading. Since the trades have not actually been executed in the market, the results may under or over-compensate for the impact (if any) of certain market factors, such as lack of liquidity. Simulated trading programs are generally designed with the benefit of hindsight and without the need to predict which way the market may turn. </p>
                        <p>NO REPRESENTATION IS MADE THAT ANY TRADING STRATEGY WILL OR IS LIKELY TO ACHIEVE PROFITS OR LOSSES SIMILAR TO THOSE SHOWN. PAST RESULTS ARE NOT INDICATIVE OF FUTURE PERFORMANCE.</p>
                        <p>Algowolf is not responsible for any losses that may occur due to any bugs or faults in our software and is provided strictly on a “as is” and “with all its faults” basis. Customers use our software at their own risk.</p>
                        <p><strong>YOU SPECIFICALLY ACKNOWLEDGE AND AGREE THAT ANY USE OF THIS WEBSITE, OUR PRODUCTS OR SERVICES IS AT YOUR OWN RISK.</strong></p>
                        <p>AlgoWolf is a trading name of Tymraft Pty Ltd, ACN: 006 268 131</p>
                        <p>All contents © 2021 AlgoWolf. All rights reserved.</p>
                        <p><strong>The following documents must be read & accepted in conjunction with the above:</strong></p>
                        <p><a href="/tos"><strong>TERMS OF USE & CONDITIONS OF SERVICE POLICY</strong></a></p>
                        <p><a href="/privacy-policy"><strong>PRIVACY POLICY</strong></a></p>
                        <p><a href="/cookies-policy"><strong>COOKIES POLICY</strong></a></p>
                    </div>
                </section>
            
            </div>

            <div id="first-section" />

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(RiskDisclosure);
