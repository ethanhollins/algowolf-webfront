import React, { Component } from 'react';

class UrlRedirect extends Component
{
    componentDidMount()
    {
        const { REACT_APP_APP_BASE_URL } = process.env;
        window.location.href = REACT_APP_APP_BASE_URL + this.props.url;
    }

    render()
    {
        return (
            <React.Fragment/>
        );
    }
    
}

export default UrlRedirect;