import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import Strategies from './Strategies';
import Banner from './Banner';

class Home2 extends Component
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

                <Banner 
                    getScreenWidth={this.props.getScreenWidth}
                />

                <Strategies
                    checkAuthorization={this.props.checkAuthorization}
                    getUserId={this.props.getUserId}
                    getStrategiesList={this.props.getStrategiesList}
                    getScreenWidth={this.props.getScreenWidth}
                    getIsBetaTester={this.props.getIsBetaTester}
                    createStrategy={this.props.createStrategy}
                    getScriptFile={this.props.getScriptFile}
                />
                
            </div>

            <section id="first-section" className="se-section features-section">
                <div className="container">
                    <div className="row">

                        <div className="col-md-4 col-sm-6 se-feature">
                            <span className="icon iconify" data-icon="cil:golf" data-inline="false"></span>
                            <h5>Get your Life Back</h5>
                            <p>Would you rather be playing golf? Free up around 30 hours of your life every week.</p>
                        </div>

                        <div className="col-md-4 col-sm-6 se-feature">
                            <span className="icon iconify" data-icon="fluent:pin-28-regular" data-inline="false"></span>
                            <h5>Pin Point Accuracy</h5>
                            <p>With pin point accuracy & super-fast order placement, AlgoWolf recognizes and executes every trading setup flawlessly according to the strategy rules.</p>
                        </div>

                        <div className="col-md-4 col-sm-6 se-feature">
                            <i className="icon ion-ios-lightbulb-outline"></i>
                            <h5>Easy to Use</h5>
                            <p>With just a few clicks you're ready to go. It switches itself on and off and automatically commences the each day without you having to lift a finger.</p>
                        </div>
                        
                        <div id="features-separator" className="col-md-12"></div>

                        <div className="col-md-6 col-sm-6 se-feature">
                            <i className="icon ion-ios-speedometer-outline"></i>
                            <h5>Tireless Performance</h5>
                            <p>Even the best traders in the world struggle to come close to matching AlgoWolf’s tireless performance.</p>
                        </div>

                        <div className="col-md-6 col-sm-12 se-feature">
                            <span className="icon iconify" data-icon="ph:chart-line-up-light" data-inline="false"></span>
                            <h5>Your Ultimate Trader</h5>
                            <p>No more costly human error due to frustration, fatigue, cognitive bias or inexperience… AlgoWolf is your ultimate trader.</p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(Home2);
