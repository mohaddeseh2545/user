import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
} from "react-router-dom";
import GetUser from '../users/Index';
import UserCreate from '../users/Create';
const DoshboardRouter = () => {

        return (
                <Switch>
                        <Route path="/GetUser" component={GetUser} />
                        <Route path="/createUser" component={UserCreate} />
                </Switch>
        )
};

export default DoshboardRouter
