import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is dashboard page
    </div>
)

const AboutMe = () => (
    <div>
        This is about page
    </div>
)

const routes = (
    <BrowserRouter>
        <Route path="/" component={ExpenseDashboardPage} />                 
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));

