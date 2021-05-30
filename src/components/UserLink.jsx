import React from 'react'

const UserLink = ({ Icon, title }) => {
    return (
        <div className="userLink">
            <Icon className="userLink__icon" />
            <h4>{title}</h4>
        </div>
    )
}

export default UserLink
