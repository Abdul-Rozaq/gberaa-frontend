import React, { useEffect } from "react";
import { Route, Switch } from "react-router";
import { useDispatch } from "react-redux";
import jwtDecode from "jwt-decode";

import Admin from "./pages/Admin";
import Delivery from "./pages/Delivery";
import History from "./pages/History";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Rider from "./pages/Rider";
import Wallet from "./pages/Wallet";
import routes from "./utils/routes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import { setCurrentUser } from "./features/authSlice";
import AdminDeliveryPage from "./pages/AdminDeliveryPage";
import AdminRiderPage from "./pages/AdminRiderPage";
import AdminCustomerPage from "./pages/AdminCustomerPage";

function App() {
  const dispatch = useDispatch();

  const handleForgotPassword = (data) => {
    alert(data);
  };

  useEffect(() => {
    try {
      const jwt = sessionStorage.getItem("token");
      const user = jwtDecode(jwt);
      dispatch(setCurrentUser(user));
    } catch (error) {}
    return () => {};
  }, [dispatch]);

  return (
    <div className="app">
      <Switch>
        <Route
          path={routes.REGISTER}
          exact
          render={(props) => <Register {...props} />}
        />
        <Route
          path={routes.LOGIN}
          exact
          render={(props) => <Login {...props} />}
        />
        <Route
          path={routes.FORGOT_PASSWORD}
          render={(props) => (
            <ForgotPassword
              {...props}
              handleForgotPassword={handleForgotPassword}
            />
          )}
        />
        <ProtectedRoute
          exact
          component={History}
          role={["ROLE_USER", "ROLE_RIDER"]}
          path={routes.HISTORY}
        />
        <ProtectedRoute
          exact
          component={Delivery}
          role={["ROLE_USER", "ROLE_RIDER"]}
          path={`${routes.DELIVERY}/:id`}
        />
        <ProtectedRoute
          exact
          component={Delivery}
          role={["ROLE_USER", "ROLE_RIDER"]}
          path={routes.DELIVERY}
        />
        <ProtectedRoute
          exact
          component={AdminDeliveryPage}
          role="ROLE_ADMIN"
          path={`${routes.ADMIN_DELIVERIES}/:id`}
        />
        <ProtectedRoute
          exact
          component={AdminDeliveryPage}
          role="ROLE_ADMIN"
          path={routes.ADMIN_DELIVERIES}
        />
        <ProtectedRoute
          exact
          component={AdminRiderPage}
          role="ROLE_ADMIN"
          path={routes.ADMIN_RIDERS}
        />
        <ProtectedRoute
          exact
          component={AdminCustomerPage}
          role="ROLE_ADMIN"
          path={routes.ADMIN_CUSTOMERS}
        />
        <ProtectedRoute
          exact
          component={Admin}
          role="ROLE_ADMIN"
          path={routes.ADMIN}
        />
        <ProtectedRoute
          exact
          component={Profile}
          role="ROLE_USER"
          path={routes.PROFILE}
        />
        <ProtectedRoute
          exact
          component={Wallet}
          role="ROLE_USER"
          path={routes.WALLET}
        />
        <ProtectedRoute
          exact
          component={Home}
          role="ROLE_USER"
          path={routes.HOME}
        />
        <ProtectedRoute
          exact
          component={Rider}
          role="ROLE_RIDER"
          path={routes.RIDER}
        />
      </Switch>
    </div>
  );
}

export default App;
