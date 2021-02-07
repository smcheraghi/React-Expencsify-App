// use Navlink instead of link when we have many link like header in 8.js
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
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

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard </NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense </NavLink>
        <NavLink activeClassName="is-active" to="/edit">Edit Expense </NavLink>
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
)
const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>      
    </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'));



