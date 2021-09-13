import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faCheckCircle, faTimesCircle
} from '@fortawesome/pro-solid-svg-icons';
import Footer from './Footer';
import Navigation2 from './Navigation2';

class Unsubscribe extends Component
{

    constructor(props)
    {
        super(props);
        
        this.performUnsubscribe = this.performUnsubscribe.bind(this);
    }

    state = {
        success: null
    }

    async componentDidMount()
    {
        await this.performUnsubscribe();
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
        const { success } = this.state;

        if (success === null)
        {
            return (
                <div className='checkout-result body'>
                    <span className='checkout-result header'>Waiting...</span>
                </div>
            );
        }
        else if (success === true)
        {
            return (
                <div className='checkout-result body'>
                    <FontAwesomeIcon className='checkout-result success-icon' icon={faCheckCircle} />
                    <span className='checkout-result header'>Success!</span>
                    <span className='checkout-result sub-header'>
                        Your email has been successfully unsubscribed.<br/>
                        Go to your <a href="/account-settings">Account Settings</a> to resubscribe to email notifications.<br/>
                        Note: This does not unsubscribe you from operational emails in relation to products you have purchased.
                    </span>
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
                        Unable to unsubscribe email.
                        Contact <a href="mailto:support@algowolf.com">support@algowolf.com</a> if you need assistance.
                    </span>
                </div>
            );
        }
    }

    async performUnsubscribe()
    {
        const query_string = new URLSearchParams(window.location.search);
        const email = query_string.get("email");
        const { REACT_APP_API_URL } = process.env;

        let { success } = this.state;

        if (email)
        {
            const update = {
                email: email
            }
            const reqOptions = {
                method: 'POST',
                headers: this.props.getHeaders(),
                credentials: 'include',
                body: JSON.stringify(update)
            }
    
            const res = await fetch(
                `${REACT_APP_API_URL}/v1/unsubscribe`,
                reqOptions
            );
                
            if (res.status === 200)
            {
                success = true;
            }
            else
            {
                success = false;
            }

            this.setState({ success });
        }
    }

}

export default withRouter(Unsubscribe);
