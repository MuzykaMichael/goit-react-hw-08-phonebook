import { useDispatch } from "react-redux";
import { logIn } from "redux/auth/operations";
import {Container, Form, Input, Label, Button} from '../Register/Register.styled'
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Login = () =>{
    const dispatch = useDispatch();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(
            logIn({
                email:form.elements.email.value,
                password:form.elements.password.value,
            })
        )
        form.reset();
    }

    const handleChange = e =>{
        const {name,value} = e.target;

        switch (name){
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    return (
        <><Container>
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit}>
                <Label>
                    Email
                    <Input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={email}
                    required
                    />
                </Label>
                <Label>
                    Password
                    <Input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={password}
                    required
                    />
                </Label>
                <Button
                type="submit">
                    Log In
                </Button>
            </Form>
            <NavLink to="/register">Sign Up</NavLink>
        </Container>
        </>
    )



}


export default Login;
