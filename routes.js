import {Route, Router, IndexRoute} from 'react-router';
import App from './App'
import Pricing from './Conponents/pricingpage';
import Resources from './Conponents/resources';
import Contact from './Conponents/contact';
import Feedback from './Conponents/feedback';
import AboutProject from './Conponents/aboutpage';

import React from 'react';
import Home from './Conponents/Home'

export const routes = () => (
    <Router>
        <Route path='/' component={App}>
            <IndexRoute component={Home}/>
            <Route path="pricing" component={Pricing}/>
            <Route path="resources" component={Resources}/>
            <Route path="contact" component={Contact}/>
            <Route path="feedback" component={Feedback}/>
            <Route path="aboutpage" component={AboutProject}/>
        </Route>
    </Router>
);