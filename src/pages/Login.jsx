import React from 'react'
import axios from '../utils/axios';
import AuthHeader from '../components/AuthHeader'
import LoginForm from '../components/forms/LoginForm'
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { setCurrentUser } from '../features/authSlice';
import routes from '../utils/routes';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogin = async (data) => {
        try {
          const { headers } = await axios.post("login", data);
          sessionStorage.setItem("token", headers.authorization);
          const user = jwtDecode(headers.authorization);
          dispatch(setCurrentUser(user));
    
          if (user.authorities[0].authority === "ROLE_USER")
            history.replace(routes.HOME);

          if (user.authorities[0].authority === "ROLE_RIDER")
            history.replace(routes.RIDER);
            
          if (user.authorities[0].authority === "ROLE_ADMIN")
            history.replace(routes.ADMIN);

        } catch (error) {
          console.log(error);
        }
      };

    return (
        <div className="wrapper">
            <div className="auth">
                <AuthHeader />

                <div className="forms">
                    <LoginForm handleLogin={handleLogin} />
                </div>
            </div>
        </div>
    )
}

export default Login
