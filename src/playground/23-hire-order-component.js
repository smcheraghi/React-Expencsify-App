// Hire Order Comonenet (HOC) => A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {                                                    // hire order component
    return (props) => (
        <div>
        {props.isAdmin && <h1>This is Admin, it is the warning to you</h1>}
        <WrappedComponent {...props} />
    </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (                                                                                 // hire order component
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Please login to see the info</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={false} info="This is the details that you must know"/>, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="This is the details that you must know"/>, document.getElementById('app'))