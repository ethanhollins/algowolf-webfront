import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheckCircle, faTimesCircle
} from '@fortawesome/pro-solid-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class CheckoutResultPage extends Component
{

    constructor(props)
    {
        super(props);

        const query_string = new URLSearchParams(window.location.search);
        this.state = {
            rescode: query_string.get("rescode")
        }
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
                />
                
                <section className="checkout-result se-section single-feature">
                    <div className="container feature-desc">
                        <div className="row">
                            {this.getMessage()}
                        </div>
                    </div>
                </section>

            </div>

            <div id="first-section" />

            <Footer/>

            </React.Fragment>

        );
    }

    getMessage = () =>
    {
        const { rescode } = this.state;

        if (rescode === "00")
        {
            return (
                <div className='checkout-result body'>
                    <FontAwesomeIcon className='checkout-result success-icon' icon={faCheckCircle} />
                    <span className='checkout-result header'>Success!</span>
                    <span className='checkout-result sub-header'>Your payment request has been processed successfully.<br/><a href="#">Click here</a> to go to your dashboard.</span>
                </div>
            );
        }
        else
        {
            return (
                <div className='checkout-result body'>
                    <FontAwesomeIcon className='checkout-result failed-icon' icon={faTimesCircle} />
                    <span className='checkout-result header'>Something went wrong.</span>
                    <span className='checkout-result sub-header'>
                        Your payment was unsuccessful. Please try again.<br/>
                        Contact <a href="mailto:support@algowolf.com">support@algowolf.com</a> if you need assistance.
                    </span>
                </div>
            );
        }
    }

}

export default withRouter(CheckoutResultPage);
