import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, Redirect, Switch
} from 'react-router-dom';
// Components
import WelcomeDemoPageTwo from './components/WelcomeDemoPageTwo';
import { config } from '@fortawesome/fontawesome-svg-core';
import Cookies from 'universal-cookie';
import UrlRedirect from './components/UrlRedirect';
import AutomatedTradingPage from './components/AutomatedTradingPage';
import BetaTesters from './components/BetaTesters';
import StrategiesPage from './components/StrategiesPage';
import FAQ from './components/FAQ';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import AccountSettings from './components/AccountSettings';
import Logout from './components/Logout';
import Tos from './components/Tos';
import PrivacyPolicy from './components/PrivacyPolicy';
import RiskDisclosure from './components/RiskDisclosure';
import CookiesPolicy from './components/CookiesPolicy';
import Legal from './components/Legal';
import HolyGrailPromo from './components/HolyGrailPromo';
import Home3 from './components/Home3';
import Pricing from './components/Pricing';
import GettingStarted from './components/GettingStarted';
import CheckoutPage from './components/CheckoutPage';
import CheckoutResultPage from './components/CheckoutResultPage';

class App extends Component 
{
    constructor(props)
    {
        super(props);
        config.autoAddCss = false
        this.cookies = new Cookies();

        this.checkAuthorization = this.checkAuthorization.bind(this);
        this.isBetaTester = this.isBetaTester.bind(this);
        this.isPackagesInUse = this.isPackagesInUse.bind(this);
        this.getStrategiesList = this.getStrategiesList.bind(this);
        this.createStrategy = this.createStrategy.bind(this);
        this.getScriptFile = this.getScriptFile.bind(this);
        this.onResize = this.onResize.bind(this);
    }

    state = {
        user_id: null,
        first_name: null,
        screen_width: 0,
        is_beta_tester: false
    }

    componentDidMount()
    {
        this.onResize();

        window.addEventListener("resize", this.onResize);
    }

    componentWillUnmount()
    {
        window.removeEventListener("resize", this.onResize);
    }

    render() {
        const queryString = window.location.search;
        
        return (
            <Router component={App}>
                <Switch>
                    <Route exact path="/">
                        <Home3 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getStrategiesList={this.getStrategiesList}
                            getScreenWidth={this.getScreenWidth}
                            getIsBetaTester={this.getIsBetaTester}
                            createStrategy={this.createStrategy}
                            getScriptFile={this.getScriptFile}
                        />
                    </Route>
                    <Route exact path="/login">
                        <Login
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            setUser={this.setUser}
                            getCookies={this.getCookies}
                        />
                    </Route>
                    <Route exact path="/register">
                        <Register
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            setUser={this.setUser}
                            getCookies={this.getCookies}
                        />
                    </Route>
                    <Route exact path="/logout">
                        <Logout
                            setUser={this.setUser}
                            getCookies={this.getCookies}
                        />
                    </Route>
                    <Route exact path="/account-settings">
                        <AccountSettings
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getHeaders={this.getHeaders}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/strategies">
                        <StrategiesPage 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getStrategiesList={this.getStrategiesList}
                            getScreenWidth={this.getScreenWidth}
                            getIsBetaTester={this.getIsBetaTester}
                            getScriptFile={this.getScriptFile}
                        />
                    </Route>
                    {/* <Route exact path="/features">
                        <Features 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                        />
                    </Route> */}
                    <Route exact path="/contact-us">
                        <ContactUs 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/legal">
                        <Legal 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/tos">
                        <Tos 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/privacy-policy">
                        <PrivacyPolicy 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/risk-disclosure">
                        <RiskDisclosure 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/cookies-policy">
                        <CookiesPolicy 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/pricing">
                        <Pricing 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getStrategiesList={this.getStrategiesList}
                            getScreenWidth={this.getScreenWidth}
                            getIsBetaTester={this.getIsBetaTester}
                            createStrategy={this.createStrategy}
                            getScriptFile={this.getScriptFile}
                            getIsBetaTester={this.getIsBetaTester}
                        />
                    </Route>
                    <Route exact path="/hgpro">
                        <HolyGrailPromo
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                            getScriptFile={this.getScriptFile}
                            getUserFile={this.getUserFile}
                            getStrategiesList={this.getStrategiesList}
                            getIsBetaTester={this.getIsBetaTester}
                            createStrategy={this.createStrategy}
                        />
                    </Route>
                    <Route exact path="/hgpro/faq">
                        <FAQ 
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/getting-started">
                        <GettingStarted
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <CheckoutPage
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/checkout/result">
                        <CheckoutResultPage
                            checkAuthorization={this.checkAuthorization}
                            getUserId={this.getUserId}
                            getFirstName={this.getFirstName}
                            getScreenWidth={this.getScreenWidth}
                        />
                    </Route>
                    <Route exact path="/app">
                        <UrlRedirect
                            url={"/" + queryString}
                        />
                    </Route>
                    <Route exact path="/holygrail">
                        <UrlRedirect
                            url={"/holygrail/demo" + queryString}
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

    onResize(e)
    {
        let { screen_width } = this.state;
        screen_width = window.innerWidth;
        this.setState({ screen_width });
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
            if (res.status === 200)
            {
                // Redirect to App
                const data = await res.json();
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

    async isBetaTester()
    {
        const { REACT_APP_API_URL } = process.env;
        const auth_token = this.getCookies().get('Authorization');
        let { is_beta_tester } = this.state;

        if (auth_token !== undefined)
        {
            var requestOptions = {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json",
                    Accept: '*/*',
                    Authorization: 'Bearer ' + auth_token
                },
                credentials: 'include'
            };

            const res = await fetch(`${REACT_APP_API_URL}/v1/account`, requestOptions);
            if (res.status === 200)
            {
                const data = await res.json();
                if (data.beta_access)
                {
                    is_beta_tester = true;
                }
                else
                {
                    is_beta_tester = false;
                }
            }
            else if (res.status === 403)
            {
                window.location = '/logout';
            }
            else
            {
                is_beta_tester = false;
            }
        }
        else
        {
            is_beta_tester = false;
        }

        this.setState({ is_beta_tester });
        return is_beta_tester;
    }

    async isPackagesInUse(packages)
    {
        const { REACT_APP_API_URL } = process.env;
        const auth_token = this.getCookies().get('Authorization');
        if (auth_token !== undefined)
        {
            var requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: '*/*',
                    Authorization: 'Bearer ' + auth_token
                },
                credentials: 'include',
                body: JSON.stringify({
                    packages: packages
                })
            };

            const res = await fetch(`${REACT_APP_API_URL}/v1/package/available`, requestOptions);
            if (res.status === 200)
            {
                const data = await res.json();
                return data.packages;
            }
            else if (res.status === 403)
            {
                window.location = '/logout';
            }
            else
            {
                return [];
            }
        }
        else
        {
            return [];
        }
    }

    async createStrategy(strategy_details)
    {
        const { REACT_APP_API_URL } = process.env;
        const auth_token = this.getCookies().get('Authorization');
        if (auth_token !== undefined)
        {
            var requestOptions = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: '*/*',
                    Authorization: 'Bearer ' + auth_token
                },
                credentials: 'include',
                body: JSON.stringify(strategy_details)
            };

            const res = await fetch(`${REACT_APP_API_URL}/v1/strategy`, requestOptions);
            if (res.status === 200)
            {
                const data = await res.json();
                return data.strategy_id;
            }
            else if (res.status === 403)
            {
                window.location = '/logout';
            }
            else
            {
                return false;
            }
        }
        else
        {
            return false;
        }
    }

    async getScriptFile(script_id, file_name)
    {
        const { REACT_APP_API_URL } = process.env;
        var requestOptions = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                Accept: '*/*'
            },
            credentials: 'include'
        };

        const res = await fetch(`${REACT_APP_API_URL}/v1/scripts/${script_id}/${file_name}`, requestOptions);
        if (res.status === 200)
        {
            const data = await res.json();
            return data.item;
        }
        else if (res.status === 403)
        {
            window.location = '/logout';
        }
        else
        {
            return null;
        }
    }

    async getUserFile(user_id, file_name)
    {
        const { REACT_APP_API_URL } = process.env;
        var requestOptions = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: '*/*'
            },
            credentials: 'include',
            body: JSON.stringify({
                file_name: file_name
            })
        };

        const res = await fetch(`${REACT_APP_API_URL}/v1/users/${user_id}/file`, requestOptions);
        if (res.status === 200)
        {
            const data = await res.json();
            return data.item;
        }
        else if (res.status === 403)
        {
            window.location = '/logout';
        }
        else
        {
            return null;
        }
    }

    async getStrategiesList()
    {
        const packages = ['HolyGrail_Pro'];
        const is_beta_tester = await this.isBetaTester();
        const packages_in_use = await this.isPackagesInUse(packages);
        return packages_in_use;
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

    getIsBetaTester = () =>
    {
        return this.state.is_beta_tester;
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

    getScreenWidth = () =>
    {
        return this.state.screen_width;
    }

}

export default App;
