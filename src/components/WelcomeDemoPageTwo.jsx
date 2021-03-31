import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faQuestionCircle
} from '@fortawesome/pro-regular-svg-icons';
import Navigation from './Navigation';
import Footer from './Footer';

class WelcomeDemoPage extends Component
{
    render()
    {
        return (
            <div className="dark-header animsition">

            <Navigation/>

            <header className="header page-title" >
                <div className="container">
                    <div className="outer">
                        <div className="inner text-center">
                            <h1 className="">Welcome to the Prison Paycheck Demo</h1>
                            <h5 className="">Algorithmic Live Signal Charts & Demo exclusively for subscribers of Scott Phillip's "Prison Paycheck" system.</h5>
                            <a href="/holygrail/demo" className="btn se-btn-black btn-rounded mt20">Goto Live Signal Charts</a>

                        </div>
                    </div>
                </div>
            </header>

            <section className="se-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">WELCOME to the Prison Paycheck Algorithmic Demonstration Platform (aka Holy Grail)<br/>including the LIVE Signal Charts on the EURUSD pair.</h4>
                            <p>Developed by AlgoWolf, this state of the art algorithmic Demo & Training Platform is exclusively for subscribers of Scott Phillip’s “Prison Paycheck” trading strategy.</p>
                            <p>You'll find this an invaluable aid to your comprehension of the Prison Paycheck strategy and to your ultimate trading success.</p>
                        </div>
                    </div>
                </div>

        
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">What you get</h4>
                            <ul className="highlights">
                                <li><i className="icon ion-checkmark"></i><strong>Live Signal Charts</strong> on the <strong>EURUSD</strong> pair as they happen in <strong>REAL TIME</strong> during the <strong>New York 3:00am - 8:00am</strong> trading session.</li>
                                <li><i className="icon ion-checkmark"></i>The Latest <strong>Daily Trading Results</strong></li>
                                <li><i className="icon ion-checkmark"></i>A <strong>Walkthrough</strong> of Each Day's <strong>Trading Setups</strong> With Pin Point Accuracy</li>
                                <li><i className="icon ion-checkmark"></i><strong>Backtest Results</strong> Over Previous Months</li>
                                <li><i className="icon ion-checkmark"></i>The <strong>Previous Day’s Trading Session's Charts & Backtest Results</strong> Posted Daily So You Can Easily Follow Or Learn The Various RTV, RTC & DV Trading Setups.</li>
                                <li><i className="icon ion-checkmark"></i>Shows the <strong>5 & 10 Minute Confirming Evidence</strong> For Each Trade</li>
                                <li><i className="icon ion-checkmark"></i>See Exactly <strong>Where Entry, Stop, High & Tight and Targets etc. are Placed</strong></li>
                                <li><i className="icon ion-checkmark"></i><strong>Strategy Insights</strong> And More!</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">To Get Started</h4>
                            <p>Simply Sign In <strong><a href='/login?redirect=holygrail%2Fdemo'>HERE</a></strong> to open a FREE account with AlgoWolf then click the “<strong>REQUEST ACCESS</strong>” button to proceed.</p>
                            <p>Once there be sure to click on <FontAwesomeIcon className='welcome message-icon' icon={faQuestionCircle} /> <span id='sp_bold'>Help</span> to become acquainted with how the charts work.</p>
                            <h5>Wishing You the Best of Success,<br/>The AlgoWolf Team</h5>
                        </div>
                    </div>
                </div>
            </section>

            <section className="se-section primary-bg">
                <div className="container">
                    <div className="row text-center">
                        <h3>Automated LIVE Trading</h3>
                        <p>of the Prison Paycheck strategy is currently available for Beta testers.</p>
                        <a href="mailto:admin@algowolf.com" className="btn se-btn-black btn-rounded">Enquire Today</a>
                    </div>
                </div>
            </section>

            <Footer/>

            </div>
        );
    }

}

export default WelcomeDemoPage;