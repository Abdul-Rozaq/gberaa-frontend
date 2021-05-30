import jwtDecode from 'jwt-decode';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import routes from '../utils/routes';

const ProtectedRoute = ({ component: Component, role, ...rest }) => {
    return (
        <Route {...rest} render = {props => {
            const jwt = sessionStorage.getItem("token");
            if (typeof jwt === undefined || jwt === null) 
                return (<Redirect
                    to={{
                        pathname: routes.LOGIN,
                        state: { from: props.location }
                    }}
                />);
            
                
            const { authorities } = jwtDecode(jwt);
            if (role.includes(authorities[0].authority)) 
                return (
                    <Switch>
                        <Component />
                    </Switch>
                );
             
            return (
                <Redirect to={{
                    pathname: routes.LOGIN,
                    state: { from: props.location }
                }}/>
            );
            
        }}/>
    )
}

export default ProtectedRoute
