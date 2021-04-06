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
                            <img src="/images/dark-logo.svg" alt="" className="footer-logo"/>
                        </div>

                        <div className="col-md-3 col-sm-3 col-xs-4">
                            <h6 className="mtn">Automated Trading</h6>
                            <ul>
                                <li><a href="/automated-trading">Gettings Started</a></li>
                                <li><a href="/automated-trading/beta-testers">Beta Testing</a></li>
                                <li><a href="/app">Goto App</a></li>
                            </ul>
                        </div>

                        <div className="col-md-3 col-sm-3 col-xs-4">
                            <h6 className="mtn">Prison Paycheck</h6>
                            <ul>
                                <li><a href="/holygrail">Getting Started</a></li>
                                {/* <li><a href="/holygrail/instructions">Instructions</a></li> */}
                                <li><a href="/holygrail/demo">Goto Live Signal Charts</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row footer-bottom">
                        <div className="col-md-6">
                            <p>Copyright &copy; AlgoWolf. 2021. All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
    
}

export default withRouter(Footer);