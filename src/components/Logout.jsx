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
        this.props.getCookies().remove('Authorization');
        this.props.setUser(null, null);
        this.props.history.push('/');
    }
}

export default withRouter(Logout);