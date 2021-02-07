//use switch to handle 404, for matching the exact path ->
// after matching stop -> without match it render all rout that match
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
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
        404!
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



