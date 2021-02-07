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

const AboutPage = () => (
    <div>
        This is about page
    </div>
)

const routes = (
    <BrowserRouter>
        <div>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/about" component={AboutPage} exact={true} />
        </div>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));



