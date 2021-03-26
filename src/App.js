import React, { Component } from 'react';
import { 
    BrowserRouter as Router, 
    Route, Redirect, Switch
} from 'react-router-dom';
// Components
import WelcomeDemoPageTwo from './components/WelcomeDemoPageTwo';
import { config } from '@fortawesome/fontawesome-svg-core'
import Cookies from 'universal-cookie';
import Home from './components/Home';
import UrlRedirect from './components/UrlRedirect';

class App extends Component 
{
    constructor(props)
    {
        super(props);
        config.autoAddCss = false
        this.cookies = new Cookies();
    }

    render() {
        const queryString = window.location.search;
        
        return (
            <Router component={App}>
                <Switch>
                    <Route exact path="/">
                        <Home />
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
    
}

export default App;
