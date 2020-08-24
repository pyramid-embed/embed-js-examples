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
import { MultiContent } from './multi-content';
import { MultiFiltering } from './multi-filtering';
import { GoToSlide } from './go-to-slide';

export const App = () =>
    <Router>
        <h1>Pyramid Embed JS - React examples</h1>
        <ul>
            <li>
                <Link to="/getting-started">Getting Started</Link>
            </li>
            <li>
                <Link to="/multi-content">Multi Content</Link>
            </li>
            <li>
                <Link to="/basic-filtering">Basic Filtering</Link>
            </li>
            <li>
                <Link to="/multi-filtering">Multi Filtering</Link>
            </li>
            <li>
                <Link to="/basic-targeting">Basic Targeting</Link>
            </li>
           {/*  <li>
                <Link to="/go-to-slide">Go To Slide</Link>
            </li> */}
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
            <Route path="/multi-targeting">
                <MultiContent />
            </Route>
            <Route path="/multi-filtering">
                <MultiFiltering />
            </Route>
            <Route path="/go-to-slide">
                <GoToSlide />
            </Route>
        </Switch>
    </Router>