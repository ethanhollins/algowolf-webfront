import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faQuestionCircle
} from '@fortawesome/pro-regular-svg-icons';
import Navigation from './Navigation';
import Footer from './Footer';

class AutomatedTradingPage extends Component
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
                            <h1 className="">Automated Trading</h1>
                            <h5 className="">Automatically trade the "Prison Paycheck" system live.</h5>
                            <a href="mailto:admin@algowolf.com" className="btn se-btn-black btn-rounded mt20">Apply to become a Beta Tester Today</a>

                        </div>
                    </div>
                </div>
            </header>

            <section className="se-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">Let AlgoWolf’s state-of-the art algorithms & fully automated order placement do all the work for you.</h4>
                            <p>Do you want to free up around 30 hours of your life every week?</p>
                            <p>AlgoWolf’s Algorithmic Trading Platform is the perfect solution for you. With pin point accuracy & super-fast order placement AlgoWolf recognizes and executes every Prison Paycheck trading setup flawlessly according to the strategy rules.</p>
                            <p>Even the best traders in the world struggle to come close to matching AlgoWolf’s tireless performance.</p>
                            <p>With just a few clicks; add your broker, set your trade risk, turn on the script and away you go. It switches itself on and off for the session and automatically commences the next day at the set time without you having to lift a finger.</p>
                            <p>No more costly human error due to frustration, fatigue, cognitive bias or inexperience… AlgoWolf is your ultimate trader.</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="underline">To Get Started</h4>
                            <p>Automated trading is currently available for Beta Testers.</p>
                            <p>Apply <strong><a href="mailto:admin@algowolf.com">HERE</a></strong> to become a Beta Tester.</p>
                            <h5>Wishing You the Best of Success,<br/>The AlgoWolf Team</h5>
                        </div>
                    </div>
                </div>
            </section>

            <Footer/>

            </div>
        );
    }

}

export default AutomatedTradingPage;