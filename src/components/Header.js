import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>Dashboard </NavLink>
        <NavLink activeClassName="is-active" to="/create">Create Expense </NavLink>
        {/**<NavLink activeClassName="is-active" to="/edit">Edit Expense </NavLink> -->  because it has dynamic address after edit like id*/}
        <NavLink activeClassName="is-active" to="/help">Help</NavLink>
    </header>
);

export default Header;