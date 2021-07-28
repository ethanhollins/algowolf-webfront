import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Logout extends Component
{   
    state = {
        completed: false
    }

    render()
    {
        return (
            <React.Fragment></React.Fragment>
        );
    }

    componentDidMount()
    {
        this.handleLogout();
    }

    async handleLogout()
    {
        const { REACT_APP_APP_BASE_URL, REACT_APP_FRONT_BASE_URL } = process.env;

        this.props.getCookies().remove('Authorization');
        this.props.setUser(null, null);
        window.location.href = REACT_APP_APP_BASE_URL + "/logout?redirect=" + encodeURIComponent(REACT_APP_FRONT_BASE_URL)
    }
}

export default withRouter(Logout);