import React from 'react';
import { useHistory } from 'react-router-dom';

const HomeLink = ({ linkImage, title, text, linkTo }) => {
    const history = useHistory();
    return (
        <div className="homeLink" onClick={() => history.push({
            pathname: "/delivery",
            search: `?type=${linkTo}`
        })}>
            <h4>{title}</h4>
            <img src={linkImage} alt="request" className="homeLink__img" />
            <p>{text}</p>
        </div>
    )
}

export default HomeLink
