import React from 'react';
import {
    MemoryRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { GettingStarted } from './getting-started';
import { Filtering } from './filtering';
import { Targeting } from './targeting';

export const App = () =>
    <Router>
        <h1>Pyramid Embed JS - React examples</h1>
        <ul>
            <li>
                <Link to="/getting-started">Getting Started</Link>
            </li>
            <li>
                <Link to="/basic-filtering">Basic Filtering</Link>
            </li>
            <li>
                <Link to="/basic-targeting">Basic Filtering</Link>
            </li>
        </ul>

        <Switch>
            <Route path="/getting-started">
                <GettingStarted />
            </Route>
            <Route path="/basic-filtering">
                <Filtering />
            </Route>
            <Route path="/basic-targeting">
                <Targeting />
            </Route>
        </Switch>
    </Router>