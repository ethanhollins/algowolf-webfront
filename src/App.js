import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, Redirect, Switch
} from 'react-router-dom';
// Components
import WelcomeDemoPageTwo from './components/WelcomeDemoPageTwo';
import { config } from '@fortawesome/fontawesome-svg-core'
import Cookies from 'universal-cookie';
import UrlRedirect from './components/UrlRedirect';
import AutomatedTradingPage from './components/AutomatedTradingPage';
import BetaTesters from './components/BetaTesters';
import Home2 from './components/Home2';
import Strategies from './components/Strategies';
import FAQ from './components/FAQ';
import Features from './components/Features';
import ContactUs from './components/ContactUs';

class App extends Component 
{
    constructor(props)
    {
        super(props);
        config.autoAddCss = false
        this.cookies = new Cookies();
    }

    state = {
        user_id: null,
        first_name: null
    }

    async componentDidMount()
    {
        await this.checkAuthorization();
    }

    render() {
        const queryString = window.location.search;
        
        return (
            <Router component={App}>
                <Switch>
                    <Route exact path="/">
                        {/* <Home /> */}
                        <Home2 
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                        />
                    </Route>
                    <Route exact path="/strategies">
                        <Strategies 
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                        />
                    </Route>
                    <Route exact path="/features">
                        <Features 
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                        />
                    </Route>
                    <Route exact path="/faq">
                        <FAQ 
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                        />
                    </Route>
                    <Route exact path="/contact-us">
                        <ContactUs 
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                        />
                    </Route>
                    <Route exact path="/register">
                        <UrlRedirect
                            url={"/register" + queryString}
                        />
                    </Route>
                    <Route exact path="/account-settings">
                        <UrlRedirect
                            url={"/account-settings" + queryString}
                        />
                    </Route>
                    <Route exact path="/login">
                        <UrlRedirect
                            url={"/login" + queryString}
                        />
                    </Route>
                    <Route exact path="/logout">
                        <UrlRedirect
                            url={"/logout" + queryString}
                        />
                    </Route>
                    <Route exact path="/app">
                        <UrlRedirect
                            url={"/" + queryString}
                        />
                    </Route>
                    <Route exact path="/holygrail">
                        <WelcomeDemoPageTwo
                            getUserId={this.getUserId}
                        />
                    </Route>
                    <Route exact path="/automated-trading">
                        <AutomatedTradingPage
                            getUserId={this.getUserId}
                        />
                    </Route>
                    <Route exact path="/automated-trading/beta-testers">
                        <BetaTesters
                            getUserId={this.getUserId}
                        />
                    </Route>
                    <Route exact path="/holygrail/demo">
                        <UrlRedirect
                            url={"/holygrail/demo" + queryString}
                        />
                    </Route>
                    <Route exact path="/holygrail/invite">
                        <Redirect to="/holygrail"/>
                    </Route>
                    <Route exact path="/holygrail/admin">
                        <UrlRedirect
                            url={"/holygrail/admin" + queryString}
                        />
                    </Route>

                    <Route>
                        404
                    </Route>
                </Switch>
            </Router>
        )
    }

    async checkAuthorization()
    {
        const { REACT_APP_API_URL } = process.env;
        const auth_token = this.getCookies().get('Authorization');
        let user_id = null;
        let first_name = null;
        if (auth_token !== undefined)
        {
            var requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: '*/*',
                    Authorization: 'Bearer ' + auth_token
                },
                credentials: 'include'
            };
    
            const res = await fetch(`${REACT_APP_API_URL}/authorize`, requestOptions);
            console.log(res.status);
            if (res.status === 200)
            {
                // Redirect to App
                const data = await res.json();
                console.log(data);
                user_id = data.user_id;
                first_name = data.first_name;
            }
            else
            {
                user_id = null;
                first_name = null;
            }
        }
        else
        {
            user_id = null;
            first_name = null;
        }

        this.setUser(user_id, first_name);
        return user_id;
    }
    
    setUser = (user_id, first_name) =>
    {
        this.setState({ user_id, first_name });
    }

    getUserId = () =>
    {
        return this.state.user_id;
    }

    getFirstName = () =>
    {
        return this.state.first_name;
    }

    getCookies = () =>
    {
        return this.cookies;
    }

    getHeaders = () =>
    {
        return {
            "Content-Type": "application/json",
            Accept: '*/*',
            Authorization: 'Bearer ' + this.getCookies().get('Authorization')
        };
    }

}

export default App;
