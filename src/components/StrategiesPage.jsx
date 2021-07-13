import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSlidersH, faInfoCircle, faPlusCircle, faArrowCircleRight
} from '@fortawesome/pro-light-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';
import Strategies from './Strategies';

class StrategiesPage extends Component
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
                        Strategies
                    </div>
                </div>

                <section className="general-info body">
                    <div className="general-info item">
                        <p>Add <strong>Strategies</strong> to your <strong>Dashboard</strong> and instantly <strong>trade live</strong> with your <strong>preferred broker</strong>.</p>
                        <p>Once added or purchased (if applicable), the <strong>Strategy</strong> will appear in the tab display section at the top of your <strong>Dashboard</strong>.
                        By clicking on that tab, you will have access to the <strong>Start button</strong> (to run the <strong>Strategy</strong> live on your broker), 
                        the <strong>Control Panel</strong> to change settings that personalize the <strong>Strategy</strong> to your needs, chart indicators/information and more.</p>
                        <p><a href="#">Find out more about trading Strategies live here.</a></p>
                    </div>
                </section>

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

            <div id="first-section" />

            <Footer/>

            </React.Fragment>

        );
    }

}

export default withRouter(StrategiesPage);
