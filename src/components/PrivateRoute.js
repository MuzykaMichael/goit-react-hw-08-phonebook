import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn,selectIsRefreshing } from "redux/auth/selectors";
import PropTypes from 'prop-types'

export const PrivateRoute = ({redirectTo="/", component:Component}) =>{
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo}/> : Component;
}

PrivateRoute.propTypes = {
    redirectTo: PropTypes.string,
    component: PropTypes.object.isRequired,
}