import { useSelector } from "react-redux"; 
import { NavLink } from "react-router-dom";
import { selectIsLoggedIn } from "redux/auth/selectors";
import {Title,Text} from './Welcome.styled'


const Welcome = () =>{
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <>
        <Title>Welcome to phonebook</Title>
        {isLoggedIn?(
            <Text>
                Click {<NavLink to="/contacts">this</NavLink>} to view contacts
            </Text>
        ):(
            <Text>
                {<NavLink to="/register">Sign Up</NavLink>} or {''}
                {<NavLink to="/login">Log In</NavLink>} to continue
            </Text>
        )}
        </>

    )
}

export default Welcome;