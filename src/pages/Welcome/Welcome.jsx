import { useSelector } from "react-redux"; 
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";
import {Title} from './Welcome.styled'
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Loader } from "components/Loader/Loader";

const Welcome = () =>{
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
        <Title>Welcome to phonebook</Title>
        {isLoggedIn?(
            <p>
                Click {<NavLink to="/contacts">this</NavLink>} to view contacts
            </p>
        ):(
            <p>
                {<NavLink to="/register">Sign Up</NavLink>} or {''}
                {<NavLink to="/login">Log In</NavLink>}
            </p>
        )}
        </>

    )
}

export default Welcome;