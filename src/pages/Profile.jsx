import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProfileForm from '../components/forms/ProfileForm';
import PageHeader from "../components/PageHeader"
import "../css/profile.css";
import { getCurrentUserAsync, selectUser } from '../features/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    // console.log(user);
    
    useEffect(() => {
        dispatch(getCurrentUserAsync())
        return () => {}
    }, [dispatch])
    
    return (
        <div className="wrapper">
            <div className="profile">
                <PageHeader title="My Profile" />
                <div className="profile__form">
                    <ProfileForm user={user} />
                </div>
            </div>
        </div>
    )
}

export default Profile
