import React from 'react';
import { Redeem, Person, History, PowerSettingsNew } from "@material-ui/icons";
import { Link, useHistory } from 'react-router-dom';

import sameDay from "../same-day-delivery.jpg"
import scheduledImg from "../4.jpg";
import HomeLink from '../components/HomeLink';
import UserLink from '../components/UserLink';
import routes from '../utils/routes';

import "../css/home.css";
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/authSlice';

const Home = () => { 
    const history = useHistory();
    const currentUser = useSelector(selectCurrentUser);
    console.log(currentUser);

    const handleLogout = () => {
        sessionStorage.clear();
        history.replace(routes.LOGIN);
    }

    return (
        <div className="wrapper">
            <div className="home">
                <div className="home__header">
                    <h3>{currentUser?.sub}</h3>
                    <PowerSettingsNew className="home__header-icon" onClick={handleLogout} />
                </div>

                <div className="home__req-links">
                    <HomeLink
                        title="On-Demand Delivery"
                        linkImage={sameDay}
                        text="Get your packages delivered TODAY."
                        linkTo="ondemand"
                    />

                    <HomeLink
                        title="Schedule A Delivery"
                        linkImage={scheduledImg}
                        text="Pick a DATE for your items to be delievered."
                        linkTo="scheduled"
                    />
                </div>

                <div className="home__user-links">
                    <Link className="link" to={routes.WALLET}>
                        <UserLink Icon={Redeem} title="Wallet" />
                    </Link>
                    <Link className="link" to={routes.PROFILE}>
                        <UserLink Icon={Person} title="Profile" />
                    </Link>
                    <Link className="link" to={routes.HISTORY}>
                        <UserLink Icon={History} title="History" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home
