import React from 'react';
import {
        BrowserRouter as Router,
        Switch,
        Route,
} from "react-router-dom";
import GetUser from '../users/Index';
import UserCreate from '../users/Create';
import Search from '../users/search/Search';

const DoshboardRouter = () => {

        return (
                <Switch>
                        <Route path="/GetUser" component={GetUser} />
                        <Route path="/CreateUser" component={UserCreate} />
                        <Route path="/Search" component={Search}/>
                </Switch>
        )
};

export default DoshboardRouter
