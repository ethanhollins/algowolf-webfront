import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class FAQ extends Component
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
                        FAQ
                    </div>
                </div>

                {/* <div className="general-info body" id="faq-contents">
                    <div className="general-info item">
                        <h1 className="general-info header">Contents</h1>
                        <ul>
                            <li><a href="#getting-started-faq">Getting Started</a></li>
                            <li><a href="#broker-faq">Strategies</a></li>
                            <li><a href="#broker-faq">Setting up my Broker</a></li>
                            <li><a href="#trading-live-faq">Trading Live</a></li>
                            <li><a href="#trading-live-faq">Holy Grail</a></li>
                            <li><a href="#general-faq">General</a></li>
                        </ul>
                    </div>
                </div> */}

                <section id="faq-body" className="se-section section">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-md-12 text-center" id="getting-started-faq">
                                <h4 className="underline">Getting Started</h4>
                            </div>

                            <div className="col-md-8 col-md-offset-2">
                                <div className="panel-group acc-faq-2" id="accordion-12" role="tablist" aria-multiselectable="true">

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading1-12">
                                            <h6 className="panel-title"><a role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse1-12" aria-expanded="false" aria-controls="collapse1-12" className="trans collapsed">Connecting your Broker <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse1-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Connecting your broker takes a few easy steps. This process will be slightly different for 
                                                each broker, which is explained during the connection process.</p>
                                                <p>First, click on the Main Menu icon in the top left of your dashboard and select My Brokers.</p>
                                                <p>Next, click on Add Broker and select the broker you wish to connect. You can connect both
                                                live and demo accounts.</p>
                                                <p>This is where the process will change from broker to broker. The instructions for each broker
                                                will be provided on the page you end up on. You may be required to login, some brokers require
                                                you to generate a token. Follow the instructions and you should be redirected back to your Dashboard
                                                on completion.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading2-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse2-12" aria-expanded="false" aria-controls="collapse2-12">Using your Broker? <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse2-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>You can organise your brokerage accounts by navigating back to the Main Menu button and selecting 
                                                My Brokers. Here you will see your connected brokers and options to change the broker name and account names</p>
                                                <p>Apply & Save to save and changes. You can also delete brokers here if required.</p>
                                                <p>Whenever using your Dashboard it is important to always select the correct Broker Account from the accounts
                                                menu next to the blue My Dashboard label.</p>
                                                <p>Whenever you start a trade or make any changes to strategy settings etc. these changes will be applied to the
                                                account you have selected. This means if you are using multiple accounts, these changes must be made individually
                                                for each account.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading3-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse3-12" aria-expanded="false" aria-controls="collapse3-12">Start Trading Live <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse3-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3-12" aria-expanded="false">
                                            <div className="panel-body">
                                                <p>Before you start trading, always check you have selected the correct broker account you wish to trade on!</p>
                                                <p>Next,make sure to navigate to the Control Panel where you provide information on your bank
                                                information, position sizes and any specific strategy changes if applicable.</p>
                                                <p>Once you have reviewed and confirmed these changes, click the Start button to begin trading. This may take a
                                                minute to start.</p>
                                                <p>Once started, you can alway press the Stop button to stop trading at anytime. Be mindful that it can somtimes
                                                take a minute for the strategy to fully stop.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading" role="tab" id="heading4-12">
                                            <h6 className="panel-title"><a className="trans collapsed" role="button" data-toggle="collapse" data-parent="#accordion-12" href="#collapse4-12" aria-expanded="false" aria-controls="collapse4-12">Watch your Strategy in Action <span className="icon fa fa-plus trans"></span></a></h6>
                                        </div>
                                        <div id="collapse4-12" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4-12" aria-expanded="false" style={{height: "0px"}}>
                                            <div className="panel-body">
                                                <p>Congratulations! You have successfully connected your broker, selected the correct broker account and started
                                                your strategy with your own personalized settings. Now it's time to watch your strategy work in action.</p>
                                                <p>Your charts will always show if there are any pending orders and open trades. The stop loss and take profit
                                                associated with these orders/trades is also shown.</p>
                                                <p>Strategies may also provide chart information located in the Chart Info window. This information appears when
                                                you select a Chart by clicking on it and hover over a bar.</p>
                                                <p>You may also find icons/text appear on your Chart. These Drawings are generated by Strategies with the exception
                                                of drawings in relation to orders/trades.</p>
                                                <p>Old Drawings and Chart Info will automatically be deleted once the total number meets the allowed limitations. This
                                                is to preserve your overall experience and keep the application running smoothly.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                
                
            </div>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(FAQ);
