// Use <Link> instead of <a> for inside client side routing/internally routing->take advantage of client side routing->for external use <a>
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is dashboard page
    </div>
)

const AddExpensePage = () => (
    <div>
        This is AddExpensePage page
    </div>
)

const EditExpensePage = () => (
    <div>
        This is EditExpensePage page
    </div>
)

const HelpPage = () => (
    <div>
        This is HelpPage page
    </div>
)

const NotFoundPage = () => (
    <div>
        <h1>404!</h1>
        <Link to="/">Go Home</Link>
    </div>
)

const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true} />
            <Route path="/create" component={AddExpensePage} />
            <Route path="/edit" component={EditExpensePage} />
            <Route path="/help" component={HelpPage} />
            <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));




