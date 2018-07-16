import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import routes from "config/Routes";
import Header from "components/Header";
import ErrorBoundary from "components/ErrorBoundary";

export default function App() {
    return (
        <React.Fragment>
            <ErrorBoundary>
                <Header/>
                <Switch>
                    {routes.map((prop, key) => {
                        return <Route path={prop.path} exact={prop.exact} component={prop.component} key={key}/>;
                    })}
                    <Redirect from="/" to={routes[0].path}/>
                </Switch>
            </ErrorBoundary>
        </React.Fragment>
    )
}