import React from 'react';
import { ArrowBack, Home } from "@material-ui/icons";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/authSlice';
import { Icon } from '@material-ui/core';

const PageHeader = ({ title }) => {
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);

    return (
        <div className="pageHeader">
            <ArrowBack className="pageHeader__icon" onClick={() => history.goBack()} />
            <h2>{title}</h2>
            <Link to={currentUser?.authorities[0]?.authority === "ROLE_RIDER" ? "/rider" : "/"} className="link">
                <Icon>
                    <Home />
                </Icon>
            </Link>
        </div>
    )
}

export default PageHeader
