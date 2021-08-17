import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CookiesPopup extends Component
{

    state = {
        show: false
    }

    componentDidMount()
    {
        if (!this.props.getCookies().get('accepted'))
        {
            let { show } = this.state;
            show = true;
            this.setState({ show });
        }
    }

    render()
    {
        const { show } = this.state;
        
        if (show)
        {
            return (
                <div id="cookies_popup">
                    <div>This website uses cookies to ensure you get the best experience on our website <a href="/cookies-policy" target="_blank">More Info</a></div>
                    <div className="accept-btn" onClick={this.onAccept.bind(this)}>Accept</div>
                </div>
            );
        }
        else
        {
            return <React.Fragment/>;
        }
    }

    onAccept = () =>
    {
        let { show } = this.state;
        show = false;
        this.setState({ show });

        this.props.getCookies().set('accepted', "true", {
            path: '/'
        });
    }

}

export default withRouter(CookiesPopup);
