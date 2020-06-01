import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '@/pages/dashboard/dashboard';
import Admin from '@/components/Admin/Admin'
import NoMatch from '@/pages/public/404';
import Login from '@/pages/public/login';

const authed = true;
export default class BasicRoute extends React.Component {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route path="/admin" render={(props) => {
                        if (authed) {
                            return (
                                <Admin>
                                    <Route exact path="/admin/dashboard" component={Dashboard} />
                                </Admin>
                            )
                        }
                        return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
                    }} />
                    <Route path="/*" component={NoMatch} />
                </Switch>
            </Router>
        );
    }
}
